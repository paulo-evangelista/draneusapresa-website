import axios, { AxiosError } from 'axios'

export async function GET(
  request: Request,
  { params }: { params: { page: string } }
) {
  const { page } = params

  if (page !== 'home' && page !== 'form') {
    return new Response('invalid param', { status: 400 })
  }

  return axios
    .get(`${process.env.COUNTER_ENDPOINT}/${page}`, {
        headers: {
          "Authorization": process.env.SECRET_PASSWORD
        }
      })
    .then(() => {
      console.log('ok')
      return new Response("{'response':'ok'", { status: 200 })
    })
    .catch((err: AxiosError) => {
      console.log(err)
      return new Response('error', { status: 500 })
    })
}
