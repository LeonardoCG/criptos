import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Error from './Error';
import useSelectMonedas from '../hooks/useSelectMonedas';
import { monedas } from '../data/monedas';

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;
    &::hover {
        background-color: #747DFE;
        cursor: pointer;
    }
`;

const Formulario = ({setMonedas}) => {

    const [ criptos, setCriptos ] = useState([]);
    const [ error, setError ] = useState(false);

    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas);
    const [ criptomoneda, SelectCriptomoneda ] = useSelectMonedas('Elige tu CriptoMoneda', criptos);
    
    useEffect(() => {
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
            const res = await fetch(url)
            const result = await res.json()

            const arrayCriptos = result.Data.map( cripto => {
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto;
            })

            setCriptos(arrayCriptos);
        }
        consultarAPI();
    }, []);

    const handleSubmit = e => {
        e.preventDefault();

        if([moneda, criptomoneda].includes('')) {
            setError(true)
            return
        } 
        setError(false)
        setMonedas({
            moneda,
            criptomoneda
        })
    }
    
    return (
        <>  
            {error && <Error>Todos los Campos son obligatorios</Error>}
            <form
                onSubmit={handleSubmit}
            >

                <SelectMonedas />
                <SelectCriptomoneda />

                <InputSubmit 
                    type="submit" 
                    value="Cotizar" 
                />
            </form>
        </> 
        
     );
}
 
export default Formulario;