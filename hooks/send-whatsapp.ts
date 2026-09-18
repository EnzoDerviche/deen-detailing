export const openWhatsApp = () => {
  const phoneNumber = "5491172763774"
  const message = "Hola! Me gustaría agendar un turno para mi vehículo"
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  window.open(whatsappUrl, "_blank")
}
