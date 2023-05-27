const Agende = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white py-2">
      <h1 className="text-4xl mb-4 text-black">Contact Us</h1>
      <p className="text-lg mb-8 text-center max-w-lg text-gray-700">
        We would love to hear from you. If you have any questions or want to
        book an appointment, please get in touch with us through WhatsApp.
      </p>
      <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-4 w-64">
        Online Consultation
      </button>
      <button className="border-2 border-black hover:bg-gray-200 text-black font-bold py-2 px-4 rounded w-64">
        In-Person Consultation
      </button>
    </div>
  )
}

export default Agende
