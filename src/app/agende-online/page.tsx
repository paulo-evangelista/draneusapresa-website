'use client'

import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Calendar } from '@/components/ui/calendar'
import { ptBR } from 'date-fns/locale'
import { Button } from '@/components/ui/button'
import whatsAppLogo from 'assets/whatsapp.svg'
import Image from 'next/image'
import axios from 'axios'
import ErrorSubmitDialog from '@/components/submitDialogs/error'
import SuccessSubmitDialog from '@/components/submitDialogs/success'
import LoadingSubmitDialog from '@/components/submitDialogs/loading'
import { set } from 'date-fns'

function formatarTelefone(v: String) {
  let r = v.replace(/\D/g, '')
  r = r.replace(/^0/, '')

  if (r.length > 11) {
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3')
  } else if (r.length > 7) {
    r = r.replace(/^(\d\d)(\d{5})(\d{0,4}).*/, '($1) $2-$3')
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,5})/, '($1) $2')
  } else if (v.trim() !== '') {
    r = r.replace(/^(\d*)/, '($1')
  }
  return r
}

function checkFormData(
  name: string,
  date: Date | undefined,
  period: string,
  phone: string,
  subject: string
) {
  if (name === '') {
    alert('Por favor, preencha o campo nome')
    return false
  }
  if (phone === '') {
    alert('Por favor, preencha o campo telefone')
    return false
  }
  if (subject === '') {
    alert('Por favor, escolha um assunto')
    return false
  }
  if (date === undefined) {
    alert('Por favor, escolha uma data')
    return false
  }
  if (period === '') {
    alert('Por favor, escolha um período')
    return false
  }
  return true
}

export default function AgendeOnline() {
  const [name, setName] = React.useState('')
  const [date, setDate] = React.useState<Date | undefined>()
  const [period, setPeriod] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [subject, setSubject] = React.useState('')
  const [description, setDescription] = React.useState('')
  
  const [errorDialogOpen, setErrorDialogOpen] = React.useState(false)
  const [successDialogOpen, setSuccessDialogOpen] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  async function sendFormData(
    name: string,
    date: Date | undefined,
    period: string,
    phone: string,
    subject: string,
    description: string
  ) {

    if (!checkFormData(name, date, period, phone, subject)) return
    alert(
      `Nome: ${name}\nTelefone: ${phone}\nAssunto: ${subject}\nData: ${date}\nPeríodo: ${period}\nDescrição: ${description}`
    )

    setLoading(true)

    const formatedDate = date.toLocaleDateString('pt-BR', {
      month: '2-digit',
      day: '2-digit',
    })

    axios
      .post('/api/agende', {
        name: name,
        date: formatedDate,
        period: period,
        phone: phone
          .replace('(', '')
          .replace(')', '')
          .replace(' ', '')
          .replace('-', ''),
        subject: subject,
        description: description,
      })
      .then(() => {
        setLoading(false)
        setSuccessDialogOpen(true)
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
        setErrorDialogOpen(true)
      })
      .finally(() => {setLoading(false)})
  }

  return (
    <>
      <div className="bg-white pb-8 items-center text-center">
        <div className="pt-1">
          <h1 className="text-3xl px-10 mb-2 text-black">
            Conquiste uma vida melhor{' '}
            <span className="text-mainPink">sem sair de casa! </span>
          </h1>
        </div>
        <div className="rounded-xl shadow-2xl text-left text-white max-w-md bg-mainPink mx-auto">
          <div className="px-4 pt-4">
            <Label htmlFor="name">Qual seu nome?</Label>
            <Input
              id="name"
              className="text-black w-64"
              placeholder="Digite aqui"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="px-4 pt-2">
            <Label htmlFor="phone">Seu telefone com DDD</Label>
            <div className="flex bg-neutral-100 w-64 rounded-lg pl-1">
              <Image src={whatsAppLogo} alt="whatsapp logo" height={32}></Image>
              <Input
                id="phone"
                inputMode="numeric"
                className="text-black"
                placeholder="(__) _____-____"
                value={formatarTelefone(phone)}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="px-4 pt-2 text-black">
            <Label htmlFor="options" className="text-white">
              No que podemos te ajudar?
            </Label>
            <Select onValueChange={(v) => setSubject(v)}>
              <SelectTrigger className="w-[320px]">
                <SelectValue
                  className="text-neutral-400"
                  placeholder="Escolha aqui"
                />
              </SelectTrigger>
              <SelectContent
                ref={(ref) => {
                  if (!ref) return
                  ref.ontouchstart = (e) => {
                    e.preventDefault()
                  }
                }}
              >
                <SelectGroup>
                  <SelectItem value="Medicina Preventiva">Medicina Preventiva</SelectItem>
                  <SelectItem value="Climatério e Menopausa">Climatério e Menopausa</SelectItem>
                  <SelectItem value="Cirurgia Ginecológica">Cirurgia Ginecológica</SelectItem>
                  <SelectItem value="Ginecologia Clínica">Ginecologia Clínica</SelectItem>
                  <SelectItem value="Longevidade Saudável">Longevidade Saudável</SelectItem>
                  <SelectItem value="Laser Ginecológico">Laser Ginecológico</SelectItem>
                  <SelectItem value="Emagrecimento">Emagrecimento</SelectItem>
                  <SelectItem value="Outros">Outros</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="pt-8 text-center">
            <p>Escolha seu dia preferido para a consulta</p>
            <div className="bg-white mt-1 rounded-lg shadow-xl w-min mx-auto">
              <Calendar
                id="calendar"
                selected={date}
                onSelect={(v) => {
                  setDate(v)
                }}
                locale={ptBR}
                mode="single"
                disabled={[
                  { before: new Date(Date.now() + 24 * 60 * 60 * 1000) },
                  {
                    dayOfWeek: [0, 6],
                  },
                  {
                    from: new Date(Date.now() + 24 * 60 * 60 * 1000),
                    to: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000),
                  },
                ]}
              />
            </div>
          </div>
          <div className="mx-auto w-fit pt-1 text-center text-black">
            <Select onValueChange={(v) => setPeriod(v)}>
              <SelectTrigger className="w-[200px]">
                <SelectValue
                  placeholder="Qual período?"
                  className="text-neutral-400"
                />
              </SelectTrigger>
              <SelectContent
                ref={(ref) => {
                  if (!ref) return
                  ref.ontouchstart = (e) => {
                    e.preventDefault()
                  }
                }}
              >
                <SelectGroup>
                  <SelectItem value="Manhã">Manhã</SelectItem>
                  <SelectItem value="Inicio da tarde">
                    Início da tarde
                  </SelectItem>
                  <SelectItem value="Fim da tarde">Fim da tarde</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="px-4 pt-4">
            <Label htmlFor="aditional">
              Alguma informação adicional? (Opcional)
            </Label>
            <Textarea
              id="aditional"
              className="text-neutral-800"
              placeholder="Digite aqui"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mx-auto w-fit pt-8 text-center">
            <button
              onClick={() =>
                sendFormData(name, date, period, phone, subject, description)
              }
              className="bg-white text-mainPink hover:scale-110 transition rounded-lg py-2 px-10 shadow-xl"
            >
              Enviar
            </button>
            <p className="pt-1 px-10 pb-4 text-xs text-gray-100 font-light">
              Vamos entrar em contato via WhatsApp para encontrar o melhor
              horário e marcar sua consulta online 😊
            </p>
          </div>
        </div>
      </div>
      <LoadingSubmitDialog open={loading} />
      <ErrorSubmitDialog open={errorDialogOpen} setOpen={setErrorDialogOpen} />
      <SuccessSubmitDialog
        open={successDialogOpen}
        setOpen={setSuccessDialogOpen}
      />
    </>
  )
}
