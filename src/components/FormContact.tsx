import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { LoadingIcon } from './icons/LoadingIcon';

export const FormContact = () => {
  const [enviado, setEnviado] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const schema = z.object({
    name: z.string().nonempty('Preencha esse campo!'),
    email: z.string().nonempty('Preencha esse campo!').email('E-mail inválido'),
    subject: z.string().nonempty('Preencha esse campo!').max(100),
    message: z.string().nonempty('Preencha esse campo!').max(600)
  })

  const { 
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormProps>({
    mode: 'all',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(schema),
  });

  const handleForm = (data: FormProps) => {
    setIsLoading(true)

    const templateParams = {
      from_name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message
    }
    emailjs.send('service_icl96dg', 'template_wi2al72', templateParams, 'h3b1BegTd3wV7WhsX')
    .then((res) => {
      setEnviado(true)
      setIsLoading(false)
    })
    .catch((e) => {
      /**  */
    })
    console.log( { data: data.email })
  }

  type FormProps = z.infer<typeof schema>

  return (
    <div>
      <div>
        <h3 className="text-3xl font-bold">Contato</h3>
        <p className="font-extralight mt-4">Por favor, preencha este formulário e entrarei em contato com você por e-mail!</p>
      </div>
      <form onSubmit={handleSubmit(handleForm)} className="bg-white mt-7">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" >
            Nome *
          </label>
          <input
            {...register('name')}
            className={`shadow appearance-none border ${errors.name && 'border-red-500'}rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
            id="name" 
            type="text"
            />
            <p className="text-red-500 text-xs italic">
              {errors.name && errors.name.message}
            </p>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" >
            E-mail *
          </label>
          <input
            {...register('email')}
            className={`shadow appearance-none border ${errors.email && 'border-red-500'}rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
            id="email"
            type="text"
            />
          <p className="text-red-500 text-xs italic">
            {errors.email && errors.email.message}
          </p>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" >
            Assunto *
          </label>
          <input
            {...register('subject')}
            className={`shadow appearance-none border ${errors.subject && 'border-red-500'}rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
            id="subject"
            type="text"
          />
          <p className="text-red-500 text-xs italic">
            {errors.subject && errors.subject.message}
          </p>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" >
            Mensagem *
          </label>
          <textarea
            {...register('message')}
            className={`shadow appearance-none border ${errors.message && 'border-red-500'} h-64 w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
            id="message" />
          <p className="text-red-500 text-xs italic">
            {errors.message && errors.message.message}
          </p>
        </div>
        <button
          className='m-auto font-semibold bg-red-500 py-4 px-10 rounded-md text-sm tracking-widest hover:bg-red-700 duration-150 text-white'
          type="submit">{isLoading ?
            <>
              <LoadingIcon />
              Enviando...
            </> : 'Enviar'
          }</button>

          {enviado && <p className='mt-8 text-green-500'>Mensagem enviada com sucesso!</p>}
      </form>
    </div>
  )
}
