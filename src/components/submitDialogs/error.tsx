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
import Link from 'next/link'

export default function ErrorSubmitDialog({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Oops! 🤕</AlertDialogTitle>
          <AlertDialogDescription>
            Tivemos um problema ao enviar seu formulário. <br /> Por favor,
            confira os dados que você inseriu, aguarde um momento e tente
            novamente.
          </AlertDialogDescription>
          <AlertDialogDescription className="text-slate-600 mt-2">
              Se o problema persistir, você pode entrar em contato diretamente
              pelo WhatsApp no botão abaixo. 😀
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=554491581548&text=Ol%C3%A1!+Gostaria+de+agendar+uma+consulta!"
          >
            <AlertDialogCancel>Abrir WhatsApp</AlertDialogCancel>
          </Link>
          <AlertDialogAction onClick={() => setOpen(false)}>
            Voltar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
