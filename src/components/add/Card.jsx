import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import React from 'react';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDisclosure } from "@nextui-org/react";
const CardApp = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [selectedCard, setSelectedCard] = useState(null);
  const list = [
      {
        title: "اذكار الصباح",
        img: "https://covers.archimed.fr/Cover/BDPTN/MONO/7Ph0plvP4Cy_WyhPpZulLw2/9789938908336/LARGE?fallback=https%3A%2F%2Fwww.bibliotheque.nat.tn%2Fui%2Fskins%2FBNTKIDS%2Fportal%2Ffront%2Fimages%2FGeneral%2FDocType%2FMONO_LARGE.png",
        link:"../morning"
      },
      {
        title: "اذكار المساء",
        img: "https://covers.archimed.fr/Cover/BDPTN/MONO/7Ph0plvP4Cy_WyhPpZulLw2/9789938908336/LARGE?fallback=https%3A%2F%2Fwww.bibliotheque.nat.tn%2Fui%2Fskins%2FBNTKIDS%2Fportal%2Ffront%2Fimages%2FGeneral%2FDocType%2FMONO_LARGE.png",
        link:'../night',
      },
      {
        title: "اذكار النوم",
        img: "https://covers.archimed.fr/Cover/BDPTN/MONO/7Ph0plvP4Cy_WyhPpZulLw2/9789938908336/LARGE?fallback=https%3A%2F%2Fwww.bibliotheque.nat.tn%2Fui%2Fskins%2FBNTKIDS%2Fportal%2Ffront%2Fimages%2FGeneral%2FDocType%2FMONO_LARGE.png",
        link:'../sleep'
      },  
      {
        title: "اذكار الاستيقاظ",
        img: "https://covers.archimed.fr/Cover/BDPTN/MONO/7Ph0plvP4Cy_WyhPpZulLw2/9789938908336/LARGE?fallback=https%3A%2F%2Fwww.bibliotheque.nat.tn%2Fui%2Fskins%2FBNTKIDS%2Fportal%2Ffront%2Fimages%2FGeneral%2FDocType%2FMONO_LARGE.png",
        link:'../Unsleep'
      },  
      {
        title: "ادعية قرآنية",
        img: "https://covers.archimed.fr/Cover/BDPTN/MONO/7Ph0plvP4Cy_WyhPpZulLw2/9789938908336/LARGE?fallback=https%3A%2F%2Fwww.bibliotheque.nat.tn%2Fui%2Fskins%2FBNTKIDS%2Fportal%2Ffront%2Fimages%2FGeneral%2FDocType%2FMONO_LARGE.png",
        link:'../Quran',
      }, 
      {
        title: "ادعية الانبياء",
        img: "https://covers.archimed.fr/Cover/BDPTN/MONO/7Ph0plvP4Cy_WyhPpZulLw2/9789938908336/LARGE?fallback=https%3A%2F%2Fwww.bibliotheque.nat.tn%2Fui%2Fskins%2FBNTKIDS%2Fportal%2Ffront%2Fimages%2FGeneral%2FDocType%2FMONO_LARGE.png",
        link:'../Anbya'
      },   
      ];
  return (
<div className="gap-2 grid grid-cols-2 sm:grid-cols-4 m-5">
      {list.map((item, index) => (
      <NavLink to={item.link}>
        <Card shadow="sm" onPress={() => { setSelectedCard(item); onOpen(); }} key={index} isPressable>
   <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>        
      </NavLink>

      ))}
    </div>
  )
}

export default CardApp;