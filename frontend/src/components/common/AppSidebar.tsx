import { SIDEBAR_ROUTES } from '@/config/constant/sidebarRoutes';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarSeparator
} from '../ui/sidebar.tsx';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible.tsx';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

// Types for better type safety
interface SubItem {
  label: string;
  path: string;
}

interface MenuItem {
  label: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  subItems?: SubItem[];
}

interface LinkClassesProps {
  isActive: boolean;
}

const AppSidebar: React.FC = () => {
  const routes = useMemo(() => SIDEBAR_ROUTES() as MenuItem[], []);
  const location = useLocation();
  const [openItems, setOpenItems] = useState<string[]>([]);

  // Group routes configuration - easier to maintain
  const routeGroups = useMemo(() => {
    const groupSizes = [2, 7, 2, 3]; // [0-2, 2-9, 9-11, 11-14]
    const groups: MenuItem[][] = [];
    let startIndex = 0;

    groupSizes.forEach(size => {
      groups.push(routes.slice(startIndex, startIndex + size));
      startIndex += size;
    });

    return groups;
  }, [routes]);

  // Memoized helper function to check if any sub-item is active
  const isSubItemActive = useCallback((subItems: SubItem[]): boolean => {
    return subItems.some(subItem => location.pathname === subItem.path);
  }, [location.pathname]);

  // Update open collapsibles when location changes
  useEffect(() => {
    const activeCollapsibles = routes
      .filter(item => item.subItems && isSubItemActive(item.subItems))
      .map(item => item.label);

    setOpenItems(activeCollapsibles);
  }, [location.pathname, routes, isSubItemActive]);

  // Styling functions
  const getLinkClasses = ({ isActive }: LinkClassesProps): string =>
    `flex items-center gap-3 p-2 text-base font-medium rounded-[8px] transition-colors ${isActive
      ? "bg-gray-100 text-gray-900"
      : "hover:bg-gray-100 text-gray-400"
    }`;

  const getSubLinkClasses = ({ isActive }: LinkClassesProps): string =>
    `flex items-center gap-3 p-2 text-sm font-medium rounded-[8px] transition-colors ${isActive
      ? "bg-gray-100 text-gray-900"
      : "hover:bg-gray-100 text-gray-600"
    }`;

  const getCollapsibleTriggerClasses = (hasActiveSubItem: boolean): string =>
    `cursor-pointer flex items-center gap-3 p-2 text-base font-medium rounded-[8px] transition-colors w-full ${hasActiveSubItem
      ? "bg-gray-100 text-gray-900"
      : "hover:bg-gray-100 text-gray-400"
    }`;

  // Handle collapsible toggle
  const handleCollapsibleToggle = useCallback((itemLabel: string) => {
    setOpenItems(prev =>
      prev.includes(itemLabel)
        ? prev.filter(label => label !== itemLabel)
        : [...prev, itemLabel]
    );
  }, []);

  // Render collapsible menu item
  const renderCollapsibleItem = (item: MenuItem) => {
    const shouldBeOpen = openItems.includes(item.label);
    const hasActiveSubItem = item.subItems ? isSubItemActive(item.subItems) : false;

    return (
      <Collapsible
        key={item.label}
        open={shouldBeOpen}
        onOpenChange={() => handleCollapsibleToggle(item.label)}
        className="group/collapsible"
      >
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton className={getCollapsibleTriggerClasses(hasActiveSubItem)}>
              <item.icon className="!w-6 !h-6" />
              <span className="text-gray-900 flex-1 text-left truncate">
                {item.label}
              </span>
              <ChevronRight
                size={16}
                className="transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
              />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub className="ml-6 mt-1">
              {item.subItems?.map((subItem) => (
                <SidebarMenuSubItem key={subItem.label}>
                  <NavLink to={subItem.path} className={getSubLinkClasses}>
                    <span>{subItem.label}</span>
                  </NavLink>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    );
  };

  // Render regular menu item
  const renderRegularItem = (item: MenuItem) => (
    <SidebarMenuItem key={item.label}>
      <NavLink to={item.path} className={getLinkClasses}>
        <item.icon className="w-6 h-6" />
        <span className="text-gray-900">{item.label}</span>
      </NavLink>
    </SidebarMenuItem>
  );

  // Main render function for menu items
  const renderMenuItem = (item: MenuItem) => {
    return item.subItems ? renderCollapsibleItem(item) : renderRegularItem(item);
  };

  return (
    <Sidebar className="left-0 pt-18 z-40 flex flex-col border-r h-full border-gray-200">
      <SidebarContent className="flex flex-col justify-between px-3 py-1.5 bg-white">
        <div>
          {routeGroups.map((group, idx) => (
            <React.Fragment key={idx}>
              <SidebarMenu className="gap-1.5">
                {group.map(renderMenuItem)}
              </SidebarMenu>
              {idx < routeGroups.length - 1 && <SidebarSeparator className="my-1.5" />}
            </React.Fragment>
          ))}
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;