import React from 'react';
import '../style/Card.css'
import {BiHotel} from 'react-icons/bi';
import {AiOutlineWifi} from 'react-icons/ai';
import {MdEmojiTransportation} from 'react-icons/md';
import {MdOutlineFoodBank} from 'react-icons/md';

const Card = ({ title, description, content, image,p_precio, precio_dolares, precio_soles, mapLink }) => {
    return (
        <div className='cards' id='paquetes'>
            <div className="card">
                <img src={image} alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className='card-content'>{content}</p>
                    <p className='card-icons'><BiHotel className='hotel-icon'/><AiOutlineWifi className='wifi-icon'/><MdEmojiTransportation className='transport-icon' /> <MdOutlineFoodBank className='food-icon'/></p>
                    <p className='card-p-precio'>{p_precio}</p>
                    <p className='precio'>{precio_dolares}</p>
                    <p className='precio'>{precio_soles}</p>
                    <a href={mapLink} target="_blank" rel="noopener noreferrer">
                        Ver mapa
                    </a>
                </div>
            </div>
        </div>

    );
};

const CardList = ({ cards, limit }) => {
    return (
        <div className="card-list">
            {cards.slice(0, limit).map(card => (
                <Card
                    key={card.title}
                    title={card.title}
                    description={card.description}
                    content={card.content}
                    p_precio={card.p_precio}
                    precio_dolares={card.precio_dolares}
                    precio_soles={card.precio_soles}
                    image={card.image}
                    mapLink={card.mapLink}
                />
            ))}
        </div>
    );
};

const Cards = () => {
    const cards = [
        {
            title: 'Londres',
            description: 'Londres, capital del Reino Unido, fusiona historia y modernidad en una experiencia única. Monumentos como el Palacio de Buckingham y la Tate Modern reflejan su diversidad cultural. Parques como Hyde Park ofrecen relajación, mientras que mercados y compras atraen a todos los gustos. Una ciudad de contrastes y energía cautivadora.',
            content: 'Este paquete contiene: ',
            p_precio: 'Precio final desde:',
            precio_dolares: 'USD 3 638 ',
            precio_soles: 'PEN 10 000',
            image: 'https://elviajerofeliz.com/wp-content/uploads/2017/10/Rutas-por-Londres.jpg',
            mapLink: 'https://www.google.com/maps/dir/Aeropuerto+Internacional+Jorge+Ch%C3%A1vez+(LIM),+Av.+Elmer+Faucett+s%2Fn,+Callao+07031/Aeropuerto+de+la+Ciudad+de+Londres+(LCY),+Hartmann+Road,+Londres,+Reino+Unido/@18.4858837,-60.1954924,4z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x9105cc3d52f51e01:0x1f75ae97fb12652c!2m2!1d-77.1079976!2d-12.0230437!1m5!1m1!1s0x47d8a8880ebb3687:0x774e8a0a64b1a4b!2m2!1d0.049518!2d51.5048437!3e4?entry=ttu',
        },
        {
            title: 'Ayacucho',
            description: 'Ayacucho es mucho más que un destino turístico; es un viaje en el tiempo a través de la historia y las tradiciones peruanas. Su encanto colonial, su rica cultura y su hermoso entorno natural hacen que esta ciudad sea un destino perfecto para quienes buscan una experiencia auténtica y enriquecedora en los Andes.',
            content: 'Este paquete contiene: ',
            p_precio: 'Precio final desde:',
            precio_dolares: 'USD 200',
            precio_soles: 'PEN 670 ',
            image: 'https://2.blogs.elcomercio.pe/checklistviajero/wp-content/uploads/sites/292/2022/11/Ayacucho-PromPeru.jpg',
            mapLink: 'https://www.google.com/maps/dir/Aeropuerto+Internacional+Jorge+Ch%C3%A1vez+(LIM),+Avenida+Elmer+Faucett,+Callao/Aeropuerto+Nacional+Alfredo+Mend%C3%ADvil+Duarte+de+Ayacucho+(AYP),+Amancaes+961,+Ayacucho+05001/@-12.5861693,-76.3165166,9z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x9105cc3d52f51e01:0x1f75ae97fb12652c!2m2!1d-77.1079976!2d-12.0230437!1m5!1m1!1s0x91128744eca660c5:0x8e5a5b66972ce8e1!2m2!1d-74.2062333!2d-13.1535906!3e4?entry=ttu',
        },
        {
            title: 'Santiago de Chile',
            description: 'Santiago de Chile es una metrópolis moderna que ha sabido conservar su identidad y encanto histórico. Con su rica cultura, escenarios naturales impresionantes y una mezcla diversa de experiencias urbanas y rurales, esta ciudad es el punto de entrada perfecto para explorar todo lo que Chile tiene para ofrecer.',
            content: 'Este paquete contiene: ',
            p_precio: 'Precio final desde:',
            precio_dolares: 'USD 1 109 ',
            precio_soles: 'PEN 4 047',
            image: 'https://elcomercio.pe/resizer/p5bfxIurBC_Z7ewhHkRV18iGKxk=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/VBRGPJZ6PRDMFE5MWB3KRD76PQ.jpeg',
            mapLink: 'https://www.google.com/maps/dir/Aeropuerto+Internacional+Jorge+Chávez+(LIM),+Av.+Elmer+Faucett+s%2Fn,+Callao+07031/Aeropuerto+Internacional+Arturo+Merino+Benítez+-+Armando+Cortinez+Oriente,+Pudahuel,+Chile/@-22.3565991,-84.6159024,5z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x9105cc3d52f51e01:0x1f75ae97fb12652c!2m2!1d-77.1079976!2d-12.0230437!1m5!1m1!1s0x9662c1c698e8603b:0x5ff1cd81b19fa9e5!2m2!1d-70.7936148!2d-33.3969306!3e4?entry=ttu',
        },
    ];

    return (
        <div className='title-paquetes'>
            <h1>Nuestros Paquetes</h1>
            <CardList cards={cards} limit={3} />
        </div>
    );
};

export default Cards;