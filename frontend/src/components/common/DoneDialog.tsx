import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import React from 'react'
import { IoIosInformationCircle } from 'react-icons/io'

interface IDoneDialog {
  open: boolean
  onClose: () => void
  title?: string
  // onSubmit: (status: boolean) => Promise<void>
  onSubmit: () => void
}

const DoneDialog: React.FC<IDoneDialog> = ({
  open,
  onClose,
  onSubmit
}: IDoneDialog) => {
  // const [showMessage, setShowMessage] = useState(false)
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
            <IoIosInformationCircle className="w-[45px] h-[45px] text-gray-400" />
          </DialogTitle>
          <DialogDescription className="text-center text-base font-normal text-gray-500 whitespace-pre-line">
            {"Make sure all data is complete and correct!"}
          </DialogDescription>
        </DialogHeader>
        {/* <div className="flex items-center justify-center gap-3 pb-6">
          <Checkbox
            id="showMessage"
            checked={showMessage}
            className="cursor-pointer"
            onCheckedChange={(checked) => setShowMessage(checked as boolean)}
          />
          <Label htmlFor="showMessage" className="cursor-pointer text-sm font-medium text-gray-900">{"Don't show this message again"}</Label>
        </div> */}
        <div className="flex flex-row gap-4 justify-center">
          <Button
            className="h-[37px] cursor-pointer rounded-[8px] text-sm font-medium text-white bg-primary hover:bg-primary-bold"
            onClick={() => onSubmit()}
          >
            {"All done & quit"}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-[37px] cursor-pointer text-sm font-medium text-gray-800"
            onClick={onClose}
          >
            {"No, back to edit"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default DoneDialog