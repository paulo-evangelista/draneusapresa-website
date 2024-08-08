import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function handleVisitorCounter(page: "home"|"form") {
  if (!localStorage.getItem(`visited${page}`)) {
    fetch(`/api/increaseVisitorCounter/${page}`).then((res)=>{
      if(res.status === 200){
        localStorage.setItem(`visited${page}`, "true")
      } else {
        console.log('error saving visit')
      }
    })
  }
}