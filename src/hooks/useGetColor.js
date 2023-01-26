import { useEffect, useState } from "react";

const useGetColor = () => {
    const [ color, setColor ] = useState( {} )

    const getColor = (type, type2) => {
        let color = {}
        if( type === 'psychic' ) {
            color = { color1: 'rgb(194, 24, 7)', color2: 'linear-gradient(to top, #fff 70%, rgba(194, 24, 7, 0.75) 30%)', color3: 'rgba(194, 24, 7, 0.75)', color5: 'linear-gradient(to top, rgb(44, 44, 44) 70%, rgba(194, 24, 7, 0.75) 30%)' }
        } else if( type === 'poison' ) {
            color = { color1: 'purple', color2: 'linear-gradient(to top, #fff 70%, rgba(128, 0, 128, 0.75) 30%)', color3: 'rgba(128, 0, 128, 0.60)', color5: 'linear-gradient(to top, rgb(44, 44, 44) 70%, rgba(128, 0, 128, 0.75) 30%)' }
        } else if( type === 'normal' ) {
            color = { color1: 'rgb(128, 60, 96)', color2: 'linear-gradient(to top, #fff 70%, rgba(128, 60, 96, 0.75) 30%)', color3: 'rgba(128, 60, 96, 0.75)', color5: 'linear-gradient(to top, rgb(44, 44, 44) 70%, rgba(128, 60, 96, 0.75) 30%)' }
        } else if( type === 'fighting' ) {
            color = { color1: 'rgb(154, 45, 33)', color2: 'linear-gradient(to top, #fff 70%, rgba(154, 45, 33, 0.75) 30%)', color3: 'rgba(154, 45, 33, 0.75)', color5: 'linear-gradient(to top, rgb(44, 44, 44) 70%, rgba(154, 45, 33, 0.75) 30%)' }              
        } else if( type === 'fire' ) {
            color = { color1: 'rgb(244, 151, 46)', color2: 'linear-gradient(to top, #fff 70%, rgba(244, 151, 46, 0.75) 30%)', color3: 'rgba(244, 151, 46, 0.75)', color5: 'linear-gradient(to top, rgb(44, 44, 44) 70%, rgba(244, 151, 46, 0.75) 30%)' }                                                             
        } else if( type === 'rock' ) {
            color = { color1: 'gray', color2: 'linear-gradient(to top, #fff 70%, rgba(128, 128, 128, 0.75) 30%)', color3: 'rgba(128, 128, 128, 0.75)', color5: 'linear-gradient(to top, rgb(44, 44, 44) 70%, rgba(128, 128, 128, 0.75) 30%)' }
        } else if( type === 'dark' ) {
            color = { color1: 'black', color2: 'linear-gradient(to top, #fff 70%, rgba(0, 0, 0, 0.8) 30%)', color3: 'rgba(0, 0, 0, 0.5)', color5: 'linear-gradient(to top, rgb(44, 44, 44) 70%, #fff' }
        } else if( type === 'ice' ) {
            color = { color1: 'rgb(149, 218, 238)', color2: 'linear-gradient(to top, #fff 70%, rgba(149, 218, 238, 0.70) 30%)', color3: 'rgba(149, 218, 238, 0.70))', color5: 'linear-gradient(to top, rgba(169, 169, 169, 0.2) 70%, rgba(149, 218, 238, 0.70)) 30%)' }
        } else if( type === 'steel' ) {
            color = { color1: 'darkgray', color2: 'linear-gradient(to top, #fff 70%, rgba(169, 169, 169, 0.75) 30%)', color3: 'rgba(169, 169, 169, 0.75)', color5: 'linear-gradient(to top, rgb(44, 44, 44) 70%, rgba(169, 169, 169, 0.75) 30%)' }
        }  else if( type === 'dragon' ) {
            color = { color1: 'rgb(116, 205, 209)', color2: 'linear-gradient(to top, #fff 70%, rgba(116, 205, 209, 0.75) 30%)', color3: 'rgba(116, 205, 209, 0.75)', color5: 'linear-gradient(to top, rgb(44, 44, 44) 70%, rgba(116, 205, 209, 0.75) 30%)' }
        } else if( type === 'fairy' ) {
            color = { color1: 'rgb(228, 79, 156)', color2: 'linear-gradient(to top, #fff 70%, rgba(228, 79, 156, 0.75) 30%)', color3: 'rgba(228, 79, 156, 0.75)', color5: 'linear-gradient(to top, rgb(44, 44, 44) 70%, rgba(228, 79, 156, 0.75) 30%)' }
        } else if( type === 'electric' ) {
            color = { color1: 'rgb(41, 71, 160)', color2: 'linear-gradient(to top, #fff 70%, rgba(41, 71, 160, 0.75) 30%)', color3: 'rgba(41, 71, 160, 0.60)', color5: 'linear-gradient(to top, rgb(44, 44, 44) 70%, rgba(41, 71, 160, 0.60) 30%)' }
        } else if( type === 'ground' ) {
            color = { color1: 'rgb(160, 108, 63)', color2: 'linear-gradient(to top, #fff 70%, rgba(160, 108, 63, 0.75) 30%)', color3: 'rgba(160, 108, 63, 0.75)', color5: 'linear-gradient(to top, rgb(44, 44, 44) 70%, rgba(160, 108, 63, 0.75) 30%)' }
        } else if( type === 'flying' ) {
            color = { color1: 'rgb(251, 172, 55)', color2: 'linear-gradient(to top, #fff 70%, rgba(251, 172, 55, 0.70) 30%)', color3: 'rgba(251, 172, 55, 0.70)', color5: 'linear-gradient(to top, rgb(44, 44, 44) 70%, rgba(251, 172, 55, 0.70) 30%)' }
        } else if( type === 'bug' ) {
            color = { color1: 'rgb(97, 142, 60)', color2: 'linear-gradient(to top, #fff 70%, rgba(97, 142, 60, 0.75) 30%)', color3: 'rgba(97, 142, 60, 0.75)', color5: 'linear-gradient(to top, rgb(44, 44, 44) 70%, rgba(97, 142, 60, 0.75) 30%)' }
        } else if( type === 'ghost' ) {
            color = { color1: 'rgb(210, 180, 160)', color2: 'linear-gradient(to top, #fff 70%, rgba(210, 180, 160, 0.70) 30%)', color3: 'rgba(210, 180, 160, 0.70)', color5: 'linear-gradient(to top, rgb(44, 44, 44) 70%, rgba(210, 180, 160, 0.70) 30%)' }
        } else if( type === 'water' ) {
            color = { color1: 'rgb(13, 139, 217)', color2: 'linear-gradient(to top, #fff 70%, rgba(13, 139, 217, 0.75) 30%)', color3: 'rgba(13, 139, 217, 0.60)', color5: 'linear-gradient(to top, rgb(44, 44, 44) 70%, rgba(13, 139, 217, 0.60) 30%)' }
        } else if( type === 'grass' ) {
            color = { color1: 'rgb(116, 198, 157)', color2: 'linear-gradient(to top, #fff 70%, rgba(116, 198, 157, 0.75) 30%)', color3: 'rgba(116, 198, 157, 0.75)', color5: 'linear-gradient(to top, rgb(44, 44, 44) 70%, rgba(116, 198, 157, 0.75) 30%)' }
        }

        if( type2 === 'psychic' ) {
            setColor( { ...color, color4: 'rgba(194, 24, 7, 0.75)' } )
        } else if( type2 === 'poison' ) {
            setColor( { ...color, color4: 'rgba(128, 0, 128, 0.75)' } )
        } else if( type2 === 'normal' ) {
            setColor( { ...color, color4: 'rgba(128, 60, 96, 0.75)' } )
        } else if( type2 === 'fighting' ) {
            setColor( { ...color, color4: 'rgba(154, 45, 33, 0.75)' } )
        } else if( type2 === 'fire' ) {
            setColor( { ...color, color4: 'rgba(244, 151, 46, 0.75)' } )
        } else if( type2 === 'rock' ) {
            setColor( { ...color, color4: 'rgba(128, 128, 128, 0.75)' } )
        } else if( type2 === 'dark' ) {
            setColor( { ...color, color4: 'rgba(0, 0, 0, 0.75)' } )
        } else if( type2 === 'ice' ) {
            setColor( { ...color, color4: 'rgba(149, 218, 238, 0.75)' } )
        } else if( type2 === 'steel' ) {
            setColor( { ...color, color4: 'rgba(169, 169, 169, 0.75)' } )
        }  else if( type2 === 'dragon' ) {
            setColor( { ...color, color4: 'rgba(116, 205, 209, 0.75)' } )
        } else if( type2 === 'fairy' ) {
            setColor( { ...color, color4: 'rgba(228, 79, 156, 0.75)' } )
        } else if( type2 === 'electric' ) {
            setColor( { ...color, color4: 'rgba(41, 51, 142, 0.75)' } )
        } else if( type2 === 'ground' ) {
            setColor( { ...color, color4: 'rgba(160, 108, 63, 0.75)' } )
        } else if( type2 === 'flying' ) {
            setColor( { ...color, color4: 'rgba(251, 172, 55, 0.75)' } )
        } else if( type2 === 'bug' ) {
            setColor( { ...color, color4: 'rgba(97, 142, 60, 0.75)' } )
        } else if( type2 === 'ghost' ) {
            setColor( { ...color, color4: 'rgba(210, 180, 160, 0.75)' } )
        } else if( type2 === 'water' ) {
            setColor( { ...color, color4: 'rgba(13, 139, 217, 0.75)' } )
        } else if( type2 === 'grass' ) {
            setColor( { ...color, color4: 'rgba(116, 198, 157, 0.75)' } )
        } else {
            setColor( color )
        }
    }

    return { getColor, color }
}

export default useGetColor