import styled from "@emotion/styled";

const Result = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;

    display: flex;
    align-items: center;
    gap: 1ren;
    margin-top: 30px;
`;

const IMAGEN = styled.img`
    display: block;
    width: 150px;
`;

const TEXTO = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }

`;

const PRECIO = styled.p`
    font-size: 30PX;
    span {
        font-weight: 700;
    }
`;


const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;
    return ( 
        <Result>
            <IMAGEN 
                src={`https://cryptocompare.com/${IMAGEURL}`} 
                alt="IMG-CRIPTO"
            />
            <div>
                <PRECIO>El precio es de: <span>{PRICE}</span></PRECIO>
                <TEXTO>Precio más alto del día: <span>{HIGHDAY}</span></TEXTO>
                <TEXTO>Precio más bajo del día: <span>{LOWDAY}</span></TEXTO>
                <TEXTO>Variación últimas 24hrs: <span>{CHANGEPCT24HOUR}</span></TEXTO>
                <TEXTO>última actualización: <span>{LASTUPDATE}</span></TEXTO>
            </div>
        </Result>
     );
}
 
export default Resultado;