class SkynetTravelAgency:
    def __init__(self):
        self.destinations = ["Playa", "Montaña", "Ciudad"]
        self.packages = {
            "Playa": "Resort en una isla paradisíaca, actividades acuáticas",
            "Montaña": "Cabaña acogedora con vista a las montañas, senderismo",
            "Ciudad": "Hotel en el corazón de una gran ciudad, tours urbanos"
        }

    def start(self):
        print("¡Bienvenido a Skynet Viajes, tu agencia virtual de aventuras!")
        print("Estamos aquí para ayudarte a encontrar tu destino ideal.")
        while True:
            selected_destination = self.select_destination()
            self.show_package_details(selected_destination)
            while True:
                respuesta = input("¿Puedo ayudarte con algo más? (Si/No): ")
                if respuesta.lower() == "si":
                    break
                elif respuesta.lower() == "no":
                    print("¡Gracias por viajar con Skynet Viajes! ¡Esperamos que tengas un viaje increíble!")
                    return
                else:
                    print("Por favor, ingresa 'Si' o 'No'.")

    def select_destination(self):
        print("Elige el destino deseado:")
        for index, destination in enumerate(self.destinations, start=1):
            print(f"{index}. {destination}")
        
        while True:
            try:
                choice = int(input("Ingresa el número correspondiente: "))
                if choice < 1 or choice > len(self.destinations):
                    print("Opción inválida. Por favor, elige una opción válida.")
                else:
                    return self.destinations[choice - 1]
            except ValueError:
                print("Ingresa un número válido.")


    def show_package_details(self, destination):
        print(f"Excelente elección de destino: '{destination}'.")
        print(f"Tu paquete incluye: {self.packages[destination]}")
        print("Imagen del destino:", self.get_image_link(destination))
        print("Proporcionar enlaces para obtener más detalles y reservar.")

    def get_image_link(self, destination):
        image_links = {
            "Playa": "https://images.unsplash.com/photo-1616036740257-9449ea1f6605?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXRhcmRlY2VyJTIwcGxheWF8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
            "Montaña": "https://images.adsttc.com/media/images/550b/82ab/e58e/ceb2/7000/0164/newsletter/portada_ATI_9911.jpg?1426817680",
            "Ciudad": "https://www.kayak.com.pe/rimg/himg/ab/64/d9/expediav2-38713-6584af-750938.jpg?width=720&height=576&crop=true"
        }
        return image_links.get(destination, "No disponible")

agencia = SkynetTravelAgency()
agencia.start()
