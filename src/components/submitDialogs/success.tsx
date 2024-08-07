import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import  { useRouter } from 'next/navigation'

export default function SuccessSubmitDialog({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {

  const router = useRouter()

  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Enviado! 🤩</AlertDialogTitle>
          <AlertDialogDescription>
            Recebemos a sua mensagem! <br /> Entraremos em contato com você pelo
            WhatsApp assim que possível!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            onClick={() => {
              setOpen(false)
              setTimeout(()=>{

                router.push('/')
              }, 1000)
            }}
          >
            Ok 🎉
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
