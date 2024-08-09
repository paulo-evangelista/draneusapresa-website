import React from 'react'
import {
  AlertDialog,
  AlertDialogContent,
} from '@/components/ui/alert-dialog'

import { ScaleLoader } from 'react-spinners'

export default function LoadingSubmitDialog({
  open,
}: {
  open: boolean
}) {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className='w-fit bg-transparent border-none shadow-none'>
        <div className='inline-block mx-auto'>
        <ScaleLoader color="#df216a" width={15} height={45}/>
        <p className='text-center text-white'>
            Enviando...
            </p>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}
