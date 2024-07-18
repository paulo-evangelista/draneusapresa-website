'use client'

import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
 } from '@/components/ui/select'

import { Calendar } from '@/components/ui/calendar'

function formatar(v: String) {

  let r = v.replace(/\D/g, "");
  r = r.replace(/^0/, "");

  if (r.length > 11) {
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (r.length > 7) {
    r = r.replace(/^(\d\d)(\d{5})(\d{0,4}).*/, "($1) $2-$3");
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else if (v.trim() !== "") {
    r = r.replace(/^(\d*)/, "($1");
  }
  return r;
}

export default function AgendeOnline() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [phone, setPhone] = React.useState('')

  return (
    <div className="bg-white min-h-screen items-center text-center">
      <div className="pt-1">
        <h1 className="text-3xl px-10 mb-2 text-black">
          Conquiste uma vida melhor{' '}
          <span className="text-mainPink">sem sair de casa! </span>
        </h1>
      </div>
      <div className="w-4/5 rounded-xl shadow-2xl text-left text-white bg-mainPink h-96 mx-auto">
        <div className="px-4 pt-4">
          <Label htmlFor="name">Qual seu nome?</Label>
          <Input id="name" className='text-black' placeholder="Digite aqui" />
        </div>
        <div className="px-4 pt-4">
          <Label htmlFor="phone">Seu telefone com DDD</Label>
          <Input
            id="phone"
            className="text-black"
            placeholder="(___) _____-____"
            value={formatar(phone)}
            onChange={(e) => setPhone(e.target.value)}
          />
          <p className="text-sm text-neutral-300">
            Vamos entrar em contato pelo WhatsApp
          </p>
        </div>
        <div className="px-4 pt-2 text-black">
          <Label htmlFor="options">Qual seu nome?</Label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  )
}
