import {Button} from "@/components/ui/button.tsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BasePaginationProps {
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (page: number) => void;
}

const BasePagination: React.FC<BasePaginationProps> = ({
                                                currentPage,
                                                totalItems,
                                                itemsPerPage,
                                                onPageChange
                                            }: BasePaginationProps) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);
    console.log(totalItems, itemsPerPage)

    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;

        // Always include page 1
        pages.push(1);

        // If total pages <= maxVisiblePages, show all pages
        if (totalPages <= maxVisiblePages) {
            for (let i = 2; i <= totalPages; i++) {
                pages.push(i);
            }
            return pages;
        }

        // For more pages, show page 1, then calculate range around current page
        let startPage = Math.max(2, currentPage - Math.floor((maxVisiblePages - 1) / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 2);

        // Adjust if we're near the end
        if (endPage - startPage + 1 < maxVisiblePages - 1) {
            startPage = Math.max(2, endPage - maxVisiblePages + 2);
        }

        // Add ellipsis if there's a gap after page 1
        if (startPage > 2) {
            pages.push('...');
        }

        // Add middle pages
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return pages;
    };

    return (
        <div className="flex items-center justify-between pt-4">
            <div className="text-sm text-gray-700">
                Showing <span className="font-medium">{startItem}-{endItem}</span> of{' '}
                <span className="font-medium">{totalItems}</span>
            </div>

            <div className="flex items-center space-x-2">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>

                {getPageNumbers().map((page, index) => {
                    if (page === '...') {
                        return (
                            <span key={`ellipsis-${index}`} className="text-gray-500 px-2">
                ...
              </span>
                        );
                    }
                    return (
                        <Button
                            key={page}
                            variant={currentPage === page ? "default" : "outline"}
                            size="sm"
                            onClick={() => onPageChange(page as number)}
                            className={currentPage === page ? "bg-gray-200 hover:bg-gray-300 text-gray-900" : ""}
                        >
                            {page}
                        </Button>
                    );
                })}

                {/* Fixed: Show last page instead of hardcoded 100 */}
                {totalPages > 5 && currentPage < totalPages - 2 && (
                    <>
                        <span className="text-gray-500">...</span>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onPageChange(totalPages)}  // ✅ Use totalPages instead of 100
                        >
                            {totalPages}  {/* ✅ Display actual total pages instead of 100 */}
                        </Button>
                    </>
                )}

                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}

export default BasePagination