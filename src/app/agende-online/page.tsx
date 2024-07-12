import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@radix-ui/react-select'

export default function AgendeOnline() {
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
          <Input id="name" placeholder='Digite aqui'/>
        </div>
        <div className="px-4 pt-4">
          <Label htmlFor="phone">Seu telefone com DDD</Label>
          <Input id="phone" placeholder='(44) 912345678'/>
          <p className='text-sm text-neutral-300'>Vamos entrar em contato pelo WhatsApp</p>
        </div>
        <div className="px-4 pt-2">
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
    </div>
  )
}
