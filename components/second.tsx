import { Grid, GridItem } from '@chakra-ui/react'
import { Button, Heading, Text } from '@chakra-ui/react'
export default function Second(){
    return (<> 
            <section className='herosection'>
                <div className='heroleft'>
                    <div className='herotext'>
                        <Heading>Unleash Your Creativity</Heading>
                        <Text className='showcase'>Showcase your work and stand out in the crowded digital space with a sleek and professional portfolio website.</Text>
                        <Button className='herobutton'> GET IN TOUCH</Button>
                    </div>
                </div>
                <div className='heroright'>
                    <img className='heroimage' src="herosectionimage.png" alt="" />
                    <div className='reviews'>
                        <Text>“Impressive design and user experience.”</Text>
                        <Text className='title'>John Smith, CEO, XYZ Inc.</Text>
                    </div>
                </div>
        </section>
        </>)
}