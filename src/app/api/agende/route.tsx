import axios, { AxiosError } from 'axios'

export async function POST(request: Request) {
  const { name, date, period, phone, subject, description } =
    await request.json()

  return axios
    .post(`${process.env.API_ENDPOINT}/submit`, {
      name: name,
      date: date,
      period: period,
      phone: phone,
      secretPassword: process.env.SECRET_PASSWORD,
      subject: subject,
      description: description,
    })
    .then((res) => {
      if (res.status === 200) {
        console.log('ok')
        return new Response("{'response':'ok'", { status: 200 })
      } else {
        console.log('error inside then')
        return new Response(
          "{ 'error': 'Oops! Tivemos um problema ao criar seu agendamento. Aguarde um momento e tente novamente! Você também pode entrar em contato diretamente pelo WhatsApp!' }",
          { status: 500 }
        )
      }
    })
    .catch((err: AxiosError) => {
      console.log(err)
      console.log(err.response?.data || 'unknown error')
      return new Response((err.response?.data as string) || 'unknown error', {
        status: 400,
      })
    })
}
