import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'

interface IWarningDialog {
  open: boolean
  onClose: () => void
  title?: string
  icon?: React.ReactNode
  onSubmit: () => Promise<void>
  labelYes?: string
  labelNo?: string
}

const WarningDialog: React.FC<IWarningDialog> = ({
  onClose,
  icon,
  onSubmit,
  open,
  title,
  labelYes = "Confirm delete",
  labelNo = "No, cancel"
}: IWarningDialog) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true)
      await onSubmit()
      onClose()
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        if (open) return
        onClose()
      }}
    >
      <DialogContent
        className="w-[400px] gap-4"
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        aria-describedby=""
      >
        <DialogHeader className="flex flex-col items-center">
          <DialogTitle>
            {icon}
          </DialogTitle>
          <DialogDescription className="text-center text-base font-normal text-gray-500 whitespace-pre-line">
            {title}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-row gap-4 justify-center">
          <Button
            className="h-[37px] cursor-pointer rounded-[8px] text-sm font-medium text-white bg-red-700 hover:bg-red-800"
            disabled={isSubmitting}
            onClick={handleSubmit}
          >
            {labelYes}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-[37px] cursor-pointer text-sm font-medium text-gray-800"
            onClick={onClose}
          >
            {labelNo}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default WarningDialog