import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

type Crumb = {
  label: string;
  href?: string;
  icon?: React.ReactNode;
};

type CustomBreadcrumbProps = {
  items: Crumb[];
};

export function CustomBreadcrumb({ items }: CustomBreadcrumbProps) {
  const location = useLocation();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isCurrent = location.pathname === item.href;

          return (
            <div key={index} className="flex flex-row items-center gap-2">
              {index > 0 && (
                <BreadcrumbSeparator className="[&>svg]:size-5">
                  <ChevronRight className="text-gray-400" />
                </BreadcrumbSeparator>
              )}
              <BreadcrumbItem>
                {isLast || isCurrent ? (
                  <BreadcrumbPage className="flex items-center gap-2 text-gray-500">
                    {item.icon && (
                      item.icon
                    )}
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link
                      to={item.href || "#"}
                      className="flex items-center gap-2 text-gray-700 hover:text-gray-500"
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

/**
 * EXAMPLE :: 
 * const BREADCRUMBITEM = [
    { label: t("general.home"), href: "/", icon: <Home size={20} /> },
    { label: t("general.account") },
  ]
 * <CustomBreadcrumb items={BREADCRUMBITEM} />
 */