import React, { useEffect, useState } from "react";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import TourList from "../components/TourList";
import BasicModal from "../components/BasicModal";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import amberd from "../assets/img/Amberd.jpg";
import trchkan from "../assets/img/Trchkan Waterfall.jpg";
import bardzrakash from "../assets/img/bardzrakash.jpg";
import devil from "../assets/img/Devil Bridge.jpg";
import sardarapat from "../assets/img/Sardarapat Memorial.jpg";
import tolors from "../assets/img/Tolors Reservoir.jpg";
import aruch from "../assets/img/Aruch Cathedral.jpg";
import kecharis from "../assets/img/Kecharis Monastery.jpg";
import khndzor from "../assets/img/Khndzoresk Bridge.jpg";
import kobayr from "../assets/img/Kobayr Monastery.jpg";
import Card from "@mui/material/Card";
import dashtadem from "../assets/img/Dashtadem Fortress.jpg";
import aragats from "../assets/img/Aragats Mount.jpg";
import aghitu from "../assets/img/Aghitu Pedestal.jpg";
import carahunge from "../assets/img/Carahunge.jpg";
import talin from "../assets/img/talin.jpg";
import Bjni from "../assets/img/Bjni.jpg";
import Dendropark from "../assets/img/Dendropark.jpg";
import Dilijan from "../assets/img/Dilijan National Park.jpg";
import Dsegh from "../assets/img/Dsegh.jpg";
import Eghvard from "../assets/img/Eghvard's Saint Mother of God Church.jpg";
import Etchmiadzin from "../assets/img/Etchmiadzin Cathedral.jpg";
import vahagni from "../assets/img/Vahagni Waterfall.jpg";
import Geghard from "../assets/img/Geghard Monastery.jpg";
import Gegharot from "../assets/img/Gegharot Waterfall.jpg";
import Goshavank from "../assets/img/Goshavank Monastery.jpg";
import Gutanasar from "../assets/img/Gutanasar.jpg";
import Haghartsin from "../assets/img/Haghartsin Monastery.jpg";
import Hovhannavank from "../assets/img/Hovhannavank Monastery.jpg";
import Hovhannes from "../assets/img/Hovhannes Tumanyan's Museum.jpg";
import qarilich from "../assets/img/Lake Kari.jpg";
import tsover from "../assets/img/Lake Tsover.jpg";
import lori from "../assets/img/Lori Fortress.jpg";
import parz from "../assets/img/Parz Lake.jpg";
import vorotnavank from "../assets/img/Vorotnavank Monastic Complex.jpg";
import gayane from "../assets/img/Saint Gayane Church.jpg";
import gevorg from "../assets/img/Saint Gevorg Monastery of Mughni.jpg";
import ripo from "../assets/img/Saint Hripsime Church.jpg";
import Nicholas from "../assets/img/Saint Nicholas Church.jpg";
import sevanavank from "../assets/img/Sevanavank Monastery.jpg";
import symphony from "../assets/img/Symphony of the stones.jpg";
import tarer from "../assets/img/Tareri purak.jpg";
import byurakan from "../assets/img/The Byurakan Astrophysical Observatory.jpg";
import garni from "../assets/img/The Temple of Garni.jpg";
import tsaghkevank from "../assets/img/Tsaghkevank Monastery.jpg";
import zvartnots from "../assets/img/Zvartnots Cathedral.jpg";
import akhtala from "../assets/img/Akhtala Monastery.jpg";
import tatev from "../assets/img/Tatev Monastery.jpg";
import aparan from "../assets/img/Aparan's Holy Cross Church.jpg";
import areni from "../assets/img/Areni Cave.jpg";
import arenichurch from "../assets/img/Areni Church.jpg";
import astghik from "../assets/img/Astghik's Waterfall.jpg";
import azatreservoir from "../assets/img/Azat Reservoir.jpg";
import chichkhan from "../assets/img/Chichkhan Waterfall.jpg";
import Gyumri from "../assets/img/wallpaper4.jpg";
import chichkhanmonastery from "../assets/img/Chichkhan Monastery.jpg";
import dzoraget from "../assets/img/Dzoraget Canyon.jpg";
import haghpat from "../assets/img/Haghpat Monastery.jpg";
import hayravank from "../assets/img/Hayravank Monastery.jpg";
import hnevank from "../assets/img/Hnevank Monastery.jpg";
import jermuk from "../assets/img/Jermuk Waterfall.jpg";
import virap from "../assets/img/Khor Virap Monastery.jpg";
import khosrov from "../assets/img/Khosrov Forest State Reserve.jpg";
import sanahin from "../assets/img/Sanahin Monastery.jpg";
import sevan from "../assets/img/Lake Sevan.jpg";
import ClockLoader from "react-spinners/ClockLoader";
import lastiver from "../assets/img/Lastiver.jpg";
import tejaruyk from "../assets/img/Tejaruyk Monastery.jpg";
import marmarik from "../assets/img/Marmarik Reservoire.jpg";
import noratus from "../assets/img/Noratus Cemetery.jpg";
import mendzer from "../assets/img/''Mendz Er Cave''.jpg";
import shaki from "../assets/img/Shaki Waterfall.jpg";
import noravank from "../assets/img/Noravank Monastery.jpg";
import odzun from "../assets/img/Odzun Monastery.jpg";
import vahramashen from "../assets/img/Vahramashen Church.jpg";
import saghmos from "../assets/img/Saghmosavank Monastery.jpg";
import sainth from "../assets/img/Saint Hovhannes Chapel.jpg";
import tsaghkadzor from "../assets/img/Tsaghkadzor.jpg";

const HotTours = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="back">
          {" "}
          <ClockLoader color={"white"} loading={loading} size={150} />
        </div>
      ) : (
        <div className="hot_tours_wrapper">
          <MobileMenu></MobileMenu>
          <Header />
          <TourList />
          <section
            className="tours"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            <h1 className="page__title">Daily Tours</h1>
            <div className="tours__container">
              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={amberd}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Amberd Fortress
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Amberd (Armenian: Ամբերդ) is a 10th-century fortress located
                    2,300 meters (7,500 ft) above sea level, on the slopes of
                    Mount Aragats at the confluence of the Arkashen and Amberd
                    rivers in the province of Aragatsotn, Armenia. The name
                    translates to "fortress in the clouds" in Armenian. It is
                    also the name incorrectly attributed to Vahramashen Church,
                    the 11th-century Armenian church near the castle. The
                    village of Byurakan is 6.4 kilometres (4.0 mi) from the site
                    of Amberd.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={Gyumri}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Gyumri
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Gyumri (Armenian: Գյումրի) is an
                    urban municipal community and the second-largest city in
                    Armenia, serving as the administrative center of Shirak
                    Province in the northwestern part of the country. By the end
                    of the 19th century, when the city was known as
                    Alexandropol, it was one of the largest cities of
                    Russian-ruled Eastern Armenia with a population similar to
                    that of Yerevan. It was renamed to Leninakan during the
                    Soviet period. The city's population grew above 200,000
                    prior to the 1988 Spitak earthquake, when it was devastated.
                    As of the 2011 census, the city had a population of 121,976,
                    down from 150,917 reported at the 2001 census.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

             

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={aragats}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Aragats Mount
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Mount Aragats (Armenian: Արագած, pronounced [ɑɾɑˈɡɑts]) is
                    an isolated four-peaked volcano massif in Armenia. Its
                    northern summit, at 4,090 m (13,420 ft) above sea level, is
                    the highest point of the Lesser Caucasus and Armenia. It is
                    also one of the highest points in the Armenian Highlands.
                    The Aragats massif is surrounded by Kasagh River on the
                    east, Akhurian River on the west, Ararat plain on the south
                    and Shirak plain on the north. The circumference of the
                    massif is around 200 km (120 mi), and covers an area of
                    6,000 km2 (2,300 sq mi) or around 1⁄5 of Armenia's total
                    area. 944 km2 (364 sq mi) of the massif is located above
                    2,000 m (6,600 ft).
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={bardzrakash}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Bardzrakash Saint Grigor Monastery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Bardzrakash St. Grigor (Gregory the Illuminator) Monastery
                    is located in Lori Province of Armenia, 2 km north-east from
                    the village of Dsegh, a birthplace of prominent Armenian
                    writer Hovhannes Toumanyan, in the wooded gorge of the River
                    Dzakhidzor (Sakhudzor). The monastery (now partially
                    destroyed) consists of two churches, a vestibule, chapels
                    and cemetery of Mamikonian princes.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={Bjni}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Bjni Fortress
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Bjni Fortress (Armenian: Բջնի Բերդ), is a medieval Armenian
                    fortress located in the village of Bjni in the Kotayk
                    Province of Armenia. It sits upon the top and along the
                    sides of a mesa that divides the village nearly in half. The
                    larger portion of which is located west of the mesa and
                    curves south, while a smaller portion is east. The walls of
                    the fortress may only be seen from the western side of the
                    village, and are easiest reached via a narrow dirt road that
                    forks (take the left fork) and goes up the side of the hill
                    past some residences. Bjni Fortress is 1,504 metres (4,934
                    ft) above sea level.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={Dendropark}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Dendropark
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Officially Sochut Dendropark named after Edmund Leonowicz,
                    commonly knowns as Stepanavan Dendropark (Armenian:
                    Ստեփանավանի դենդրոպարկ), is an arboretum located near the
                    Gyulagarak village, Lori Province, Armenia. Located around
                    85 km north of the capital Yerevan, the park was founded in
                    1931 by Polish engineer-forester Edmund Leonowicz. The
                    arboretum is 35 ha in total of which 17.5 ha consist of
                    natural forest and 15 ha of ornamental trees.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={Dilijan}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Dilijan National Park
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Dilijan National Park is one of the four national parks of
                    Armenia. Occupying an area of 240 km², it is located in the
                    north-eastern Tavush Province of Armenia. It is known for
                    its forest landscapes, rich biodiversity, medicinal mineral
                    water springs, natural and cultural monuments, and extensive
                    network of hiking trails. Dilijan National Park was
                    established in 2002 on the basis of the state nature
                    reserve, which in its turn was established in 1958 on the
                    basis of the former Dilijan and Kuybishev forest
                    enterprises. The territory of the newly established national
                    park has stayed unchanged.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={Dsegh}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Dsegh
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Dsegh (Armenian: Դսեղ), known as Tumanyan between 1938 and
                    1969, is a village in the Lori Province of Armenia. Dsegh is
                    the birthplace of one of the most celebrated of Armenian
                    poets Hovhannes Tumanyan.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={Eghvard}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Dsegh
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Holy Mother of God Church (Armenian: Սուրբ Աստվածածին
                    եկեղեցի), sometimes known as Yeghvard Church, is a medieval
                    Armenian church located at the center of Yeghvard in the
                    Kotayk Province of Armenia. It was completed in 1301 during
                    the rule of the Zakarid dynasty. It was built and completed
                    as an alternative church of the nearby ruined Katoghike
                    Church, a large three-nave basilica dating back to the 5th
                    and 6th centuries.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={Etchmiadzin}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Etchmiadzin Cathedral
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Etchmiadzin Cathedral (Armenian: Էջմիածնի մայր տաճար,
                    romanized: Ēǰmiatsni mayr tačar) is the mother church of the
                    Armenian Apostolic Church, located in the city of
                    Vagharshapat (Etchmiadzin), Armenia. According to most
                    scholars it was the first cathedral built in ancient
                    Armenia, and is often considered the oldest cathedral in the
                    world.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={Geghard}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Geghard Monastery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Geghard (Armenian: Գեղարդ, meaning "spear") is a medieval
                    monastery in the Kotayk province of Armenia, being partially
                    carved out of the adjacent mountain, surrounded by cliffs.
                    It is listed as a UNESCO World Heritage Site with enhanced
                    protection status. While the main chapel was built in 1215,
                    the monastery complex was founded in the 4th century by
                    Gregory the Illuminator at the site of a sacred spring insie
                    a cave. The monastery had thus been originally named
                    Ayrivank (Այրիվանք), meaning "the Monastery of the Cave".
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={Gegharot}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Gegharot Waterfall
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Gegharot waterfall, waterfall in Armenia. The natural
                    monument is located in Aragatsotn region, 11 km north-west
                    of Aragats village. Registered in the list of state natural
                    monuments of the Ministry of Nature Protection of the
                    Republic of Armenia. It was included in the list of state
                    natural monuments in accordance with the decision of the
                    Government of the Republic of Armenia "On approving the list
                    of natural monuments of the Republic of Armenia" adopted on
                    August 14, 2008. On the slope of Aragats, about 3000 meters
                    above sea level, on the Gegharot tributary of the Kasagh
                    River is this wonderful waterfall. It is located about 12 km
                    away from Aragats village of Aragatsotn region.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={Gegharot}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Gegharot Waterfall
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Gegharot waterfall, waterfall in Armenia. The natural
                    monument is located in Aragatsotn region, 11 km north-west
                    of Aragats village. Registered in the list of state natural
                    monuments of the Ministry of Nature Protection of the
                    Republic of Armenia. It was included in the list of state
                    natural monuments in accordance with the decision of the
                    Government of the Republic of Armenia "On approving the list
                    of natural monuments of the Republic of Armenia" adopted on
                    August 14, 2008. On the slope of Aragats, about 3000 meters
                    above sea level, on the Gegharot tributary of the Kasagh
                    River is this wonderful waterfall. It is located about 12 km
                    away from Aragats village of Aragatsotn region.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={Goshavank}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Goshavank Monastery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Goshavank (Armenian: Գոշավանք; meaning "Monastery of Gosh";
                    previously known as Nor Getik) is a 12th- or 13th-century
                    Armenian monastery located in the village of Gosh in the
                    Tavush Province of Armenia. The impressive monastery which
                    has remained in relatively good condition also houses one of
                    the world's finest examples of a khachkar. Goshavank was
                    erected in the place of an older monastery once known as Nor
                    Getik, which had been destroyed by an earthquake in 1188.
                    Mkhitar Gosh, a statesman, scientist and author of numerous
                    fables and parables as well as the first criminal code, took
                    part in the rebuilding of the monastery.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={Gutanasar}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Gutanasar
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Gutanasar or Gut'anasar (Armenian: Գութանասար) is a mountain
                    in the Kotayk Province near Fantan in Armenia. It is a 7,543
                    ft (2,299 m) high. A small Surb Astvatsatsin Church is
                    located below it.[citation needed] It is a volcano which
                    last erupted 200,000 BP, judging from Ar39/Ar40 dating of
                    lava flows, and one of the common sources of obsidian in
                    archeological sites of Armenia. Neighbouring communities
                    include Fontan and Alapars. The volcano is part of the
                    Geghama mountains volcanic area and appear to share a common
                    feeding conduit.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={Haghartsin}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Haghartsin Monastery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Haghartsin (Armenian: Հաղարծին) is a 13th-century monastery
                    located near the town of Dilijan in the Tavush Province of
                    Armenia. It was built between the 10th and 13th centuries
                    (in the 12th under Khachatur of Taron); much of it under the
                    patronage of the Bagratuni Dynasty. Traditionally, an eagle
                    was soaring over the dome of the main building at its
                    dedication and thus it became commonly known as the
                    monastery of the playing (or soaring) eagle ("Hagh" means a
                    game while "Artsin", a form of "Artsiv", means eagle in
                    Armenian).
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={Hovhannavank}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Hovhannavank Monastery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Hovhannavank (Armenian: Հովհաննավանք) is a medieval
                    monastery located in the village of Ohanavan in the
                    Aragatsotn Province of Armenia. The monastery stands on the
                    edge of the Kasagh River canyon, and its territory is
                    adjacent to the village of Ohanavan. The deep gorge is
                    carved by the Kasagh River.The oldest part of the monastery
                    is the single nave basilica of St. Karapet (i.e. Holy
                    Forerunner, John the Baptist) that was founded at the
                    beginning of the fourth century by St. Gregory the
                    Enlightener, who baptized Armenia into the world's first
                    Christian nation.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={Hovhannes}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Hovhannes Tumanyan's Museum
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Hovhannes Tumanyan's first biography was the poet himself.
                    At the age of eighteen, he began writing the story of his
                    ancestors by writing "Acts of Crimes." In the 90's he tried
                    to compose the pedigree of the tribe, and in 1905 he wrote a
                    brief biography for the Luys calendar. The idea of
                    ​​creating an extensive autobiography has occupied him for
                    the last years of his life. According to Nvard and Hamlik
                    Tumanyan's memoirs, Dad was going to write a two-volume
                    autobiography.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={qarilich}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lake Kari
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lake Kari (Lake Qari, Armenian: Քարի լիճ) is a lake in
                    Armenia located on the slopes of Mount Aragats. Most of its
                    water comes from ice and snow. It is located 3,185 m above
                    the sea level and has a perimeter of 1,150 m.[1] From
                    Byurakan village an asphalt automobile road stretches
                    towards the source of Arkashen River, the lake Kari, located
                    on a plateau below the peaks. On the eastern side of the
                    lake there is a meteorological station.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={tsover}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lake Tsover
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lake Tsover is one of the natural sights of Lori province,
                    located near Dsegh village. The local nature is
                    breathtaking․ If you are looking for a quiet, cozy corner
                    far away from crowded, noisy and busy cities, you will
                    definitely appreciate this wonderful place.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={qarilich}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lake Kari
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lake Kari (Lake Qari, Armenian: Քարի լիճ) is a lake in
                    Armenia located on the slopes of Mount Aragats. Most of its
                    water comes from ice and snow. It is located 3,185 m above
                    the sea level and has a perimeter of 1,150 m.[1] From
                    Byurakan village an asphalt automobile road stretches
                    towards the source of Arkashen River, the lake Kari, located
                    on a plateau below the peaks. On the eastern side of the
                    lake there is a meteorological station.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={lori}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lori Fortress
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lori Fortress (Armenian: Լոռի բերդ) is an 11th-century
                    Armenian fortress located near the Lori Berd village in Lori
                    Province, Armenia. The fortress was built by David Anhoghin
                    to become the capital of Kingdom of Tashir-Dzoraget in 1065.
                    The Lori Fortress was the site where the Georgian king
                    Giorgi III of Georgia trapped and besieged his rebellious
                    nephew, Demna of Georgia in 1177. The fortress was captured
                    by the Mongol commander Chagatai the Elder in 1239.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={parz}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Parz Lake
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lake Parz (Armenian: Պարզ Լիճ) is a small lake located in
                    the Dilijan National Park east of Dilijan in Armenia. The
                    lake was formed by natural climatic changes. "Parz" in
                    Armenian means clear. In 2017 the TransCaucasian Trail was
                    created to connect Parz Lake with the town of Dilijan and in
                    the opposite direction with Gosh Village and Gosh Lake. The
                    trail was created through the building of new trail segments
                    to connect existing trails or dirt roads together. In 2018
                    Trails For Change NGO has built a new trail that loops
                    around the Lake. A restaurant with bar, paddle boats ropes
                    course and zip lines are found around the lake.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={gayane}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Saint Gayane Church
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The Saint Gayane Church (Armenian: Սուրբ Գայանե եկեղեցի;
                    pronounced Surb Gayane) is a 7th-century Armenian church in
                    Vagharshapat (Etchmiadzin), the religious center of Armenia.
                    It is located within walking distance from the Etchmiadzin
                    Cathedral of 301. St. Gayane was built by Catholicos Ezra I
                    in the year 630. Its design has remained unchanged despite
                    partial renovations of the dome and some ceilings in 1652.
                    Gayane was the name of an abbess who was martyred with other
                    nuns by Tiridates III of Armenia in the year 301, and
                    subsequently made a saint of the Armenian Apostolic Church.
                    In 2000, Saint Gayane Church was listed in the UNESCO World
                    Heritage Sites along with historical churches of
                    Vagharshapat.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={gevorg}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Saint Gevorg Monastery of Mughni
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Saint Gevork Monastery or Saint George's Monastery of Mughni
                    (Armenian: Սուրբ Գեւորգ Եկեղեցի or Սուրբ Գեւորգ Վանք ;
                    pronounced Surp Gevork) is located just off of the main road
                    that runs through the village of Mughni near Ashtarak in the
                    Aragatsotn Province of Armenia. It was built to house some
                    of the remains of Saint George who was known as the "Slayer
                    of Dragons".
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={ripo}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Saint Hripsime Church
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Saint Hripsime Church (Armenian: Սուրբ Հռիփսիմե եկեղեցի,
                    Surb Hřip’simē yekeghetsi; sometimes Hripsimeh) is a seventh
                    century Armenian Apostolic church in the city of
                    Vagharshapat (Etchmiadzin), Armenia. It is one of the oldest
                    surviving churches in the country. The church was erected by
                    Catholicos Komitas to replace the original mausoleum built
                    by Catholicos Sahak the Great in 395 AD that contained the
                    remains of the martyred Saint Hripsime to whom the church is
                    dedicated. The current structure was completed in 618 AD.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={Nicholas}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Saint Nicholas Church
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    St. Nicholas the Wonderworker Church (Russian: Церковь
                    Николая Чуботворца), a Russian Orthodox church in the
                    village of Amrakits, Lori Region, Armenia. It was built in
                    1848 (according to other sources in 1879) by the Ukrainian
                    Cossacks for the Russian-Orthodox village of Nikolaka (now
                    Amrakits). It was rebuilt in 1910-1914, getting its current
                    look. Operated until 1988. Significantly damaged during the
                    Spitak earthquake. It is in an emergency situation. In 2009,
                    the icons in it were moved to the Russian Church in Gyumri.
                    It is a monument of national significance (number 5.13.4).
                    The church belongs to the Kuban Diocese of Yekaterinburg.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={sevanavank}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Sevanavank Monastery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Sevanavank (Armenian: Սևանավանք; meaning Sevan Monastery) is
                    a monastic complex located on a peninsula at the
                    northwestern shore of Lake Sevan in the Gegharkunik Province
                    of Armenia, not far from the town of Sevan. Initially the
                    monastery was built at the southern shore of a small island.
                    After the artificial draining of Lake Sevan, which started
                    in the era of Joseph Stalin, the water level fell about 20
                    metres, and the island transformed into a peninsula. At the
                    southern shore of this newly created peninsula, a guesthouse
                    of the Armenian Writers' Union was built. The eastern shore
                    is occupied by the Armenian president's summer residence,
                    while the monastery's still active seminary moved to newly
                    constructed buildings at the northern shore of the
                    peninsula.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={symphony}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Symphony of the stones
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The Garni Gorge and the "Symphony of the stones" is situated
                    23 km east of Yerevan, Armenia, just below the village of
                    the same name. On a promontory above the gorge the
                    first-century AD Temple of Garni may be seen. Along the
                    sides of the gorge are cliff walls of well-preserved basalt
                    columns, carved out by the Goght River. This portion of the
                    Garni Gorge is typically referred to as the "Symphony of the
                    Stones." It is most easily reached via a road that leads
                    left down the gorge just before reaching the temple of
                    Garni. Another road leads to the gorge through the village,
                    down a cobblestone road, and into the valley.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={tarer}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Tareri purak
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The monument was built in 2005 on the occasion of the 1600th
                    anniversary of the creation of the Armenian alphabet. The
                    monument includes the ornaments of 39 letters of the
                    Armenian alphabet հուշ the monuments of the great Armenians.
                    Monument to the Armenian alphabet, a monument in the village
                    of Artashavan, Aragatsotn region, on the eastern slope of
                    Mount Aragats. Built in 2005.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={byurakan}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    The Byurakan Astrophysical Observatory
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The Byurakan Astrophysical Observatory, or Byurakan
                    Observatory is an astronomical observatory owned and
                    operated by the Armenian Academy of Sciences. It is located
                    on the slope of Mount Aragats in the village of Byurakan in
                    Armenia.Byurakan Observatory's main telescope is a 2.6 m
                    Cassegrain reflector, along with a 1 and 0.5 m Schmidt
                    camera as well as other smaller telescopes.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={garni}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    The Temple of Garni
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The Temple of Garni (Armenian: Գառնիի տաճար, Gaṙnii tačar)
                    is the only standing Greco-Roman colonnaded building in
                    Armenia and the former Soviet Union. Built in the Ionic
                    order, it is located in the village of Garni, in central
                    Armenia. It is the best-known structure and symbol of
                    pre-Christian Armenia. The structure was probably built by
                    king Tiridates I in the first century AD as a temple to the
                    sun god Mihr. After Armenia's conversion to Christianity in
                    the early fourth century, it was converted into a royal
                    summer house of Khosrovidukht, the sister of Tiridates III.
                    According to some scholars it was not a temple but a tomb
                    and thus survived the destruction of pagan structures.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={tsaghkevank}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Tsaghkevank Monastery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Tsaghkank or Virgo Varvara, a monastery dug in a cave on
                    Mount Ara in Armenia. Nearby residents celebrate both
                    Christian and pagan holidays.Tsaghkevank is located on Mount
                    Ara in the Aragatsotn region. There is a spring in Mamrot
                    Monastery, which is said to have healing properties,
                    especially in connection with sight. There is a significant
                    level of zinc in the water, which helps with vision, as well
                    as in case of joint and muscle spasms. The locals call it
                    "Holy Water".
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={zvartnots}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Zvartnots Cathedral
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Zvartnots Cathedral (Armenian: Զուարթնոց (classical);
                    Զվարթնոց (reformed); literally 'celestial angels cathedral')
                    is a 7th-century centrally planned aisled tetraconch type
                    Armenian cathedral built by the order of Catholicos Nerses
                    the Builder from 643–652. Now in ruins, it is located at the
                    edge of the city of Vagharshapat (Etchmiadzin) in Armavir
                    Province of Armenia.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={akhtala}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Akhtala Monastery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Akhtala (Armenian: Ախթալայի վանք), also known as
                    Pghindzavank (Armenian: Պղնձավանք, meaning Coppermine
                    Monastery) is a 10th-century Armenian Apostolic monastery
                    located in the town of Akhtala in the marz of Lori, 185
                    kilometers (115 mi) north of Yerevan and 87 kilometers south
                    of Tbilisi . The monastery is currently inactive. The
                    fortress played a major role in protecting the north-western
                    regions of Armenia (Gugark) and is among the most well
                    preserved of all in modern Armenia. The main church at the
                    compound is famous for its highly artistic frescoes, which
                    cover the inside walls, the partitions, and the bearings of
                    the building. The modern name of Akhtala was first recorded
                    in a royal decree of 1438. The etymology of the name
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={aparan}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Aparan's Holy Cross Church
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The Kasagh Basilica (Քասաղի բազիլիկա), formally known as the
                    Holy Cross Church (Սուրբ Խաչ եկեղեցի, Surb Khach
                    yekeghetsi), is an early medieval Armenian church in the
                    town of Aparan in the Aragatsotn Province of Armenia. It is
                    dated by scholars to the fourth or fifth century. It was
                    originally within the grounds of the Arsacid (Arshakuni)
                    dynasty palace. The church was partly restored in 1877.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={areni}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Areni Cave
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The Areni-1 cave complex (Armenian: Արենիի քարանձավ) is a
                    multicomponent site, and late Chalcolithic/Early Bronze Age
                    ritual site and settlement, located near the Areni village
                    in southern Armenia along the Arpa River.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={arenichurch}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Areni Church
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Surb Astvatsatsin of Areni (Armenian: Սուրբ Աստուածածին
                    եկեղեցի; meaning the "Holy Mother of God Church"; also Areni
                    Church Armenian: Արենիի եկեղեցի) is a single-nave two-aisled
                    domed church completed in the year 1321. It is located atop
                    a plateau overlooking the Arpa River and the village of
                    Areni in the Vayots Dzor Province of Armenia.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={astghik}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Astghik's Waterfall
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The territory of Khosrov Reserve there are 4 waterfalls, two
                    of which are located very close to each other and are named
                    after the Armenian pagan gods – Astghik (goddess of water,
                    love and beauty) and Vahagn (god of lightning and thunder).
                    Vahagn is also known as Vishapakagh (Dragon slayer). Astghik
                    was Vahagn’s lover. According to legend, after their
                    meetings, it always rained, bringing people a rich harvest.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={azatreservoir}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Azat Reservoir
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Azat Reservoir is located in Ararat region, at an altitude
                    of 1050 meters above sea level. It was built near the
                    village of Lanjazat, in the middle course of the Azat River.
                    The reservoir is used for irrigation of the Ararat valley.
                    Irrigated agriculture is developed there. Azat Reservoir has
                    been put into operation since 1976. The total volume is 70
                    million cubic meters. The area of the reservoir is very
                    beautiful. The sky and the clouds are reflected in the
                    water, depending on the time of day, they give a unique look
                    to the reservoir. The Yeranos Mountains rise around the
                    reservoir.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={chichkhan}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Chichkhan Waterfall
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    One of the most beautiful natural landscapes to visit in
                    northern Armenia can be found near the border of Shirak and
                    Lori provinces along the Chichkan River. Trchkan Waterfall
                    stands at 23 meters and is one of the highest in Armenia in
                    the sense that it has one of the highest vertical drops
                    compared to the other waterfalls. In the middle stream,
                    before entering the deep, narrow gorge, it forms Trchkan
                    waterfall, which is also known as Chichkhan waterfall or
                    Trchkan water. The locals call the waterfall Chran. Trchkan
                    waterfall has been included in the list of natural monuments
                    since 2008, and since 2011 the area has been established as
                    a specially protected zone. Now Trchkan is being certified
                    as a natural monument.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={chichkhanmonastery}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Chichkhan Monastery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Chichkhan Monastery or Svanakan Monastery is an Armenian
                    medieval church north of Shirakamut village of Lori region
                    of the Republic of Armenia. It is included in the list of
                    immovable historical and cultural monuments of Armenia.
                    Chichkhanavank belongs to the type of small cross-domed
                    small churches that were widespread in the early medieval
                    church construction. This type of solid structures is one of
                    the unique manifestations of Armenian architecture, with
                    numerous layout, spatially differentiated solutions.
                    Chichkhanavank is built of polished, pink tuff, lined with
                    midis (three layers). The construction protocol of the
                    church has not been preserved, but due to the dimensional
                    composition and architectural style of the building, it
                    dates back to the 6th-7th centuries.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={dzoraget}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Dzoraget Canyon
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Dzoraget River flows through the northern part of Armenia,
                    passing through the city of Stepanavan in Lori region. The
                    name of the river is literally translated as a river-gorge
                    (dzor-gorge, get-river). Together with the river Pambak
                    Dzoraget flows into the river Debed. Dzoraget flows through
                    a deep canyon, which is considered one of the most beautiful
                    places in Armenia. The steep rocks of the canyon are
                    impregnable in the upper part, while closer to the water the
                    canyon is more passable and you can explore the banks of the
                    river. Dzoraget is considered the most suitable for rafting
                    on catamarans and is therefore popular among fans of active
                    sports. The floating part of the river begins at the bridge,
                    at the entrance to Stepanavan. Not far from Stepanavan and
                    the gorge there is located Lori Berd fortress, an ancient
                    bridge across the Urut river, on the right bank of the river
                    there is the monastery complex Hnevank (XII century).
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={haghpat}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Haghpat Monastery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Haghpat Monastery, also known as Haghpatavank (Armenian:
                    Հաղպատավանք), is a medieval monastery complex in Haghpat,
                    Armenia, built between the 10th and 13th century. The
                    monastery was founded by Queen Khosrovanuysh, wife of the
                    Bagratid king Ashot III, probably in 976. The nearby
                    monastery at Sanahin was built around the same time.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={hayravank}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Hayravank Monastery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Hayravank (Armenian: Հայրավանք) is a 9th to 12th century
                    Armenian monastery located just northeast of the village of
                    Hayravank along the southwest shores of Lake Sevan in the
                    Gegharkunik Province of Armenia. The monastic complex
                    consists of a church, chapel, and gavit. Surrounding the
                    monastery are numerous khachkars and gravestones that are
                    part of a small cemetery. To the northwest a short distance
                    from the site, are the remains of Bronze Age through
                    medieval fortification walls and foundations of a
                    settlement. A polished black vessel of the Early Bronze Age
                    was discovered during archaeological excavations in the
                    area. Weapons of metal and stone, tools, clay idols,
                    numerous vessels, fireplaces and two tombs, all from the
                    Iron Age were discovered in the vicinity as well.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={hnevank}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Hnevank Monastery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Hnevank (Armenian: Հնեվանք; meaning "Old Monastery") is a
                    7th-12th century Armenian Apostolic Church monastery,
                    located near the village of Kurtan in the Lori Province of
                    Armenia. The monastery is situated on a hill within a gorge,
                    near where the Dzoraget and Gargar rivers join. The
                    monastery was entirely rebuilt by lord Smbat of the House of
                    Orbelian, a branch of the Liparitids who were expelled to
                    Armenia in the late 12th century from Georgia. Liparitids
                    were themselves a branch of the Mamikonians. Smbat was the
                    ancestor of the Armenian princes of Syunik. A Georgian
                    inscription around the drum attests his name. The monastery
                    has a gavit and various service buildings scattered around
                    the site. The government of Armenia has recently begun
                    renovating the monastery. The collapsed dome of the main
                    church has been restored entirely.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={jermuk}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Jermuk Waterfall
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The most picturesque waterfall in Armenia is Jermuk
                    Waterfall located in the health resort of Jermuk. The
                    waterfall is located at an altitude of 2000 meters above the
                    sea level. Jermuk Waterfall is of 70 meters height and it is
                    considered the second highest waterfall in Armenia. There is
                    one interesting legend relating about the origin of the
                    waterfall. Once upon a time, there was a nobleman who built
                    a castle on rocks above the gorge. The nobleman’s daughter
                    was so beautiful that the bridegrooms from all over the
                    world wish to marry such Armenian beauty. However, her heart
                    belonged to the son of a shepherd. Every night the girl
                    threw a rope in the gorge, and her lover climbed the rope
                    and got through the window to his beloved. One day a
                    nobleman found the rope and cursed his daughter with the
                    words: “I curse you to become a mermaid and never get out of
                    the water if you meet that peasant again”.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={virap}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Khor Virap Monastery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Khor Virap (Armenian: Խոր Վիրապ, lit. 'deep dungeon') is an
                    Armenian monastery located in the Ararat Plain in Armenia,
                    near the closed border with Turkey, about 8 kilometres (5.0
                    mi) south of Artashat, Ararat Province, within the territory
                    of ancient Artaxata. The monastery was host to a theological
                    seminary and was the residence of Armenian Catholicos. Khor
                    Virap's notability as a monastery and pilgrimage site is
                    attributed to the fact that Gregory the Illuminator was
                    initially imprisoned here for about 14 years by King
                    Tiridates III of Armenia. Saint Gregory subsequently became
                    the king's religious mentor, and they led the proselytizing
                    activity in the country. In the year 301, Armenia was the
                    first country in the world to be declared a Christian
                    nation.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={khosrov}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Khosrov Forest State Reserve
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Khosrov Forest State Reserve (Armenian: Խոսրովի անտառ
                    պետական արգելոց), is a nature reserve in Ararat Province of
                    Armenia. The reserve is one of the oldest protected areas in
                    the world having a history of about 1700 years. It was
                    founded in the 4th century (334–338) by the order of Khosrov
                    Kotak, King of Armenia who gave it his name. It was founded
                    to improve the natural climatic conditions of adjacent
                    territories of Artashat – the capital city of Armenia of the
                    given period and the newly established city of Dvin to
                    ensure conservation and enrichment of flora and fauna
                    species; serve as a ground for royal hunting, military
                    exercises and entertainments. This area was designated as a
                    state reserve in September 1958 and covers around 23213.5 ha
                    at elevations from 700 to 2800 m above sea level.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={sevan}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lake Sevan
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Set 1900m above sea level and covering 1240 sq km, the vast
                    expanse of Sevana Lich (Lake Sevan) is the largest lake in
                    the Caucasus and one of the largest freshwater high-altitude
                    lakes in the world. Its colours and shades change with the
                    weather, forming dazzling azure to dark blue hues, and a
                    thousand shades in between. Fish populations include the
                    endangered ishkhan (prince trout) as well as introduced
                    crayfish and sig (whitefish).
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={lastiver}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lastiver
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Yenokavan is situated in the north-east of Armenia, 10
                    kilometers from the town of Ijevan. It is located at a
                    height of 1,000-1,300 meters, surrounded by hills, and close
                    to a forest-covered gorge about 100 meters deep that ranges
                    for about five kilometers. The gorge of Yenokavan has
                    several caves – from 10 to 30 meters long and about 15
                    meters wide. The seal of mankind is put here on the walls of
                    the cave – through dozens of beautiful carvings that depict
                    man and beast side by side as well as images of large and
                    small crosses. It is due to these crosses that some people
                    visit Lastiver today as a place of pilgrimage.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={marmarik}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Marmarik Reservoire
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={noratus}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Noratus Cemetery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Noratus (Armenian: Նորատուս; also known as Noraduz) is a
                    village in the Gegharkunik Province of Armenia, near the
                    town of Gavar. The village has a rich historical past, and
                    is famous for the Noratus cemetery, the largest surviving
                    cemetery in the world featuring khachkars.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={noravank}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Noravank Monastery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Noravank (Armenian: Նորավանք, lit. 'new monastery') is a
                    13th-century Armenian monastery, located 122 km from Yerevan
                    in a narrow gorge made by the Amaghu River, near the town of
                    Yeghegnadzor in Armenia. The gorge is known for its tall,
                    sheer, brick-red cliffs, directly across from the monastery.
                    The monastery is best known for its two-storey Surb
                    Astvatsatsin (Holy Mother of God) Church, which grants
                    access to the second floor by way of a narrow stone-made
                    staircase jutting out from the face of building.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={odzun}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Odzun Monastery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The first church appeared here in the 6th century. In the
                    8th century it was reconstructed by Hovhannes III Odznetsi
                    (Հովհաննես Գ Օձնեցի) who served as the katholikos between
                    717 and 728 and was, as his name suggests, from Odzun. This
                    is the time the church got its current form of a pink
                    felsite basilica with three naves, the two side naves being
                    narrow. At the northern (not preserved anymore) and southern
                    side there are unusual arcaded cloisters and the west
                    cloister has a blind wall with an arched entrance in the
                    middle. Squinches supporting the dome, interior view The
                    roof is barrel vaulted. Four columns support the rib vaulted
                    tambour and there are two more columns at the western part
                    of the church.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={saghmos}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Saghmosavank Monastery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The Saghmosavank (Armenian: Սաղմոսավանք, lit. "monastery of
                    the Psalms") is a 13th-century Armenian monastic complex
                    located in the village of Saghmosavan in the Aragatsotn
                    Province of Armenia. Like the Hovhannavank monastery which
                    is five kilometers south, Saghmosavank is situated atop the
                    precipitous gorge carved by the Kasagh river. Their
                    silhouettes dominate the adjacent villages and rise sharp
                    against the background of the mountains crowned by Mount
                    Aragats. The main structures of the monasteries erected by
                    Prince Vache Vachutyan—the Church of Zion in Saghmosavank
                    (1215) and the Church of Karapet in Hovhannavank
                    (1216-1221)—belong to the same type of cross-winged domed
                    structure with two-floor annexes in all the corners of the
                    building. Subcupola space predominates in the interiors of
                    both churches, which is reflected in the exterior shapes of
                    these structures.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={odzun}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Odzun Monastery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The first church appeared here in the 6th century. In the
                    8th century it was reconstructed by Hovhannes III Odznetsi
                    (Հովհաննես Գ Օձնեցի) who served as the katholikos between
                    717 and 728 and was, as his name suggests, from Odzun. This
                    is the time the church got its current form of a pink
                    felsite basilica with three naves, the two side naves being
                    narrow. At the northern (not preserved anymore) and southern
                    side there are unusual arcaded cloisters and the west
                    cloister has a blind wall with an arched entrance in the
                    middle. Squinches supporting the dome, interior view The
                    roof is barrel vaulted. Four columns support the rib vaulted
                    tambour and there are two more columns at the western part
                    of the church.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={sainth}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Saint Hovhannes Chapel
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    St. Hovhannes Chapel (St. Hovhannes of Ghaltakhchi) is a
                    chapel of the Armenian Apostolic Church near the village of
                    Hartagyugh in the Lori region of Armenia, on the
                    inaccessible hill of the Holy Mountain in the Pambak
                    mountain range. It is located in a strong seismic zone,
                    there are earthquakes. There are strong winds. Hartagyugh is
                    1730 m above sea level. The place of pilgrimage was called
                    "Saint Ghaltakhchu" after the old name of the village.
                    According to the legend, the relics of Hovhannes the
                    Baptist, which was brought here in the 13th century, are
                    summarized here. St. Hovhannes Chapel is located at an
                    altitude of 2157 meters on the top of the Holy Mountain. It
                    is possible to get there by climbing the mountain about 3 km
                    on foot from Hartagyugh or Mets Parni village. The original,
                    old look of the chapel is not preserved.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={tejaruyk}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Tejaruyk Monastery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Tejharuyk (Armenian: Թեժառույք) is a 12th-century walled
                    Armenian monastery located upon a wooded hill just southwest
                    of the village of Meghradzor in the Kotayk Province of
                    Armenia. It was constructed between 1196–99 and commissioned
                    by Ivane, a commander of the Armeno-Georgian
                    Zakarian-Mkhargrzeli family, who was a convert to the
                    Georgian Orthodox Church. His vassal, Prince Bubak, and the
                    latter's heirs are buried in the gavit of the church.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={trchkan}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Trchkan Waterfall
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    One of the most beautiful natural landscapes to visit in
                    northern Armenia can be found near the border of Shirak and
                    Lori provinces along the Chichkan River. Trchkan Waterfall
                    stands at 23 meters and is one of the highest in Armenia in
                    the sense that it has one of the highest vertical drops
                    compared to the other waterfalls. In the middle stream,
                    before entering the deep, narrow gorge, it forms Trchkan
                    waterfall, which is also known as Chichkhan waterfall or
                    Trchkan water. The locals call the waterfall Chran. Trchkan
                    waterfall has been included in the list of natural monuments
                    since 2008, and since 2011 the area has been established as
                    a specially protected zone. Now Trchkan is being certified
                    as a natural monument.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={tsaghkadzor}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Tsaghkadzor
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Tsaghkadzor (Armenian: Ծաղկաձոր) is a spa town and urban
                    municipal community, as well as one of the most popular
                    health resorts in Armenia, located north of the capital
                    Yerevan in the Kotayk Province. According to the 2011
                    census, the town has a population of 1,256, down from 3,350
                    reported in the 1989 census. Currently, the town has an
                    approximate population of 900 as per the 2016 official
                    estimate.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={vahagni}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Vahagni Waterfall
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The territory of Khosrov Reserve there are 4 waterfalls, two
                    of which are located very close to each other and are named
                    after the Armenian pagan gods – Astghik (goddess of water,
                    love and beauty) and Vahagn (god of lightning and thunder).
                    Vahagn is also known as Vishapakagh (Dragon slayer). Astghik
                    was Vahagn’s lover. According to legend, after their
                    meetings, it always rained, bringing people a rich harvest.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={aghitu}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Aghitu Pedestal
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The pedestal of Aghitu monument is built of polished stones,
                    where the remains of the dead are buired. A three-wing stele
                    with gorgeous ornaments rises in the central part of the
                    platform. The surrounding area is rich with archeological
                    monuments, which prove that it was a pagan religious area.
                    The structure was destroyed and a church was built on its
                    site. A new church was built by King Smbat of Syunik in the
                    place of the same church in the 10th-11th centuries, which
                    was destroyed by fire.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={aruch}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Aruch Cathedral
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    There is a cathedral with an unusual architecture in Aruch
                    village located on the slope of mountain Aragats. The
                    residence of Grigor Mamikonyan was in this place in the 7-th
                    century. He and his wife Elena built the Aruch Cathedral and
                    consecrated it in honor of St. Gregory the Illuminator. You
                    can see the open sky as the dome is destroyed, and it looks
                    like a harmonious continuation of the ancient frescos
                    depicted on the walls. There are ruins of the chapel,
                    basilica of Katoghike and palace near the temple where once
                    there were halls with columns and gallery. All these objects
                    had been built at different times. Aruch is a significant
                    historical monument of Armenia.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={carahunge}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Carahunge
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Carahunge (Armenian: Քարահունջ, also romanized as Karahunj
                    and Qarahunj), also known as Zorats Karer (Armenian: Զորաց
                    Քարեր), Dik-Dik Karer (Armenian: Դիք-Դիք Քարեր), Tsits Karer
                    (Armenian: Ցից Քարեր) and Karenish (Armenian: Քարենիշ), is a
                    prehistoric archaeological site near the town of Sisian in
                    the Syunik Province of Armenia. It is also often referred to
                    in international tourist lore as the "Armenian Stonehenge".
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={talin}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Cathedral of Talin
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The church of S. Astvatsatsin is situated adjacent to the
                    entrance of the cemetery and monastic complex at Talin and
                    near the main cathedral. It is a small cruciform
                    central-planned building with a Byzantine-style single red
                    tile, octagonal umbrella domed roof that is centered over
                    the church. The dome sits above an octagonal drum that is
                    pierced by four small windows. A decorative geometric
                    projecting cornice trims the dome and gable roof. There is a
                    single entrance to the building from the western façade,
                    with an inscription written upon the half-rounded tympanum
                    above. The inscription attests to a construction date in the
                    7th century. It reads the following passage: I Nerseh the
                    patrician proconsul, lord of Shirak and Asharunik, built
                    this church in the name of the Holy Mother of God for her
                    intercession for me and my wife Shushan and Hrapat my son.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={dashtadem}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Dashtadem Fortress
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Dashtadem (Armenian: Դաշտադեմ; formerly, Nerkin Talin (Note:
                    The majority of residents in neighboring Talin still refer
                    to Dashtadem as Nerkin Talin); Russified as Nizhniy Talin;
                    both meaning "lower Talin") is a village located in the
                    Aragatsotn Province of Armenia. The village was inhabited
                    mainly by Azerbaijanis in the 18th and 19th centuries, and
                    was previously referred to as Turki Talin ("Turkish Talin"),
                    Talin Nor ("New Talin") and Talin Pokr ("Little Talin") to
                    distinguish it from Talin, which was also called Hayi Talin
                    ("Armenian Talin"). The population became exclusively
                    Armenian in the early 20th century.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={devil}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Devil Bridge
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The Devil Bridge natural monument is located in the Syunik
                    region, in the deepest part of the Vorotan gorge, some 2.5km
                    east of Tatev village. The natural bridge is about 30m long
                    and 50-60m wide. This natural miracle was formed over
                    hundreds of years through the warm mineral waters and
                    sediments of calcium salts. Accumulating on the both sides
                    of the river, the sediments formed an arch-type natural
                    bridge across the Vorotan river. Surrounding the bridge are
                    warm mineral water pools, believed by some to hold
                    therapeutic properties. Below the bridge is a spectacular
                    stalactite cave. The site is a popular destination for
                    swimming and picnics, with many visitors from the town of
                    Goris and the surrounding villages.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={kecharis}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Kecharis Monastery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Kecharis Monastery (Armenian: Կեչառիսի վանքային համալիր), is
                    a medieval Armenian monastic complex dating back to the 11th
                    to 13th centuries, located 60 km from Yerevan, in the ski
                    resort town of Tsakhkadzor in Armenia. Nestled in the Pambak
                    mountains, Kecharis was founded by a Pahlavuni prince in the
                    11th century, and construction continued until the middle of
                    the 13th century. In the 12th and 13th centuries, Kecharis
                    was a major religious center of Armenia and a place of
                    higher education. Today, the monastery has been fully
                    restored and is clearly visible from the ski slopes. The
                    domes of the two main churches were heavily damaged in an
                    earthquake in 1927. The buildings were conserved during the
                    period of the Armenian SSR, and rebuilding work started in
                    the 1980s.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={khndzor}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Khndzoresk Bridge
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    In the end of the 19th century, Old Khndzoresk was the
                    biggest village of Eastern Armenia. In the beginning of the
                    20th century the community had 8300 inhabitants (1800
                    households). In 1913 there were 27 shops, 3 dye-houses,
                    tanneries, 7 schools. The village is famous for taking part
                    in the liberation movement of David Bek. The fortress of
                    Khndzoresk served as a military base for Mkhitar Sparapet in
                    1728–1730. In 1735 the village was visited by Catholicos
                    (Head of Armenian Apostolic Church) Abraham Kretatsi who
                    gave a thorough description of the community in his
                    chronicles. During the 1980s, an additional village sprouted
                    7 km from Khndzoresk due to resizing and political unrest.
                    This village, considerably smaller than Khndzoresk, is
                    called Lower Khndzoresk, or Nerkin Khndzoresk.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={kobayr}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Kobayr Monastery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Kobayr (Armenian: Քոբայր) is a 12th-century Armenian
                    monastery located in the village Kobayr, directly across the
                    road from the town of Tumanyan, within Lori marz, Armenia.
                    The monastery was built on a brink of a deep gorge, in 1171,
                    by the Kyurikid princes, a junior branch of the Bagratuni
                    royal house of Armenia. In the 13th century, the monastery
                    was acquired by the Zakarians, a noble Armenian dynasty at
                    the service of Georgian royals. The Zakarians converted
                    Kobayr into a Chalcedonian monastery, as a result of which
                    the monastery stayed under the tutelage of the Georgian
                    Orthodox Church for some time. This explains several
                    Georgian inscriptions found on the walls of the monastery,
                    which exist alongside the monastery's original Armenian
                    inscriptions.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={mendzer}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Mendz Er Cave
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The "Mendz er" cave was probably a habitat of the first man,
                    later turned into a hiding place, and not long ago it became
                    a herd of goats. There are many famous and still to be
                    discovered caves in Debed gorge, all with their own stories.
                    There is a well-known story. It is said that the tunnel
                    reaches Sanahin Monastery. To say that the view from the
                    cave is magnificent would be an understatement. Fairytale
                    paradise Lori opens to the visitor. Nature with its
                    surrounding mountains, high Lalvar mountain, valleys and
                    trees. From this cave you can see the city of Alaverdi, with
                    its cozy corners and the beautiful stream of the Debed
                    River. The cave is right in the mountain with several people
                    in a row. The monasteries of Haghpat and Sanahin, Akhtala
                    Monastery, the famous Stone Bridge are very close to the
                    cave. It takes a few minutes to reach the Mikoyan Brothers
                    House-Museum in Sanahin village. Not far away is another
                    beautiful place, the Zarni-Parni complex.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={sanahin}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Sanahin Monastery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Sanahin Monastery is an Armenian monastery founded in the
                    10th century in the Lori Province of Armenia, recognized as
                    a UNESCO World Heritage Site. The name Sanahin literally
                    translates from Armenian as 'this one is older than that
                    one', presumably representing a claim to having an older
                    monastery than the neighbouring Haghpat Monastery. The two
                    villages and their monasteries are similar in many ways, and
                    lie in plain view of each other on a dissected plateau
                    formation, separated by a deep crack formed by a small river
                    flowing into the Debed river. As with Haghpat, Sanahin is
                    frequented by an increasing number of tourists, due to its
                    recent inclusion on the itineraries of a great number of
                    Armenian tour agencies, the beauty of its monastery complex
                    matching that of Haghpat's. The complex belongs to the
                    Armenian Apostolic Church with numerous khachkars (stones
                    with elaborate engravings representing a cross) and bishop
                    gravesites scattered throughout it.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={sardarapat}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Sardarapat Memorial
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Sardarapat Memorial is a memorial complex to the Battle of
                    Sardarabad located in the village of Araks, in the Armavir
                    Province of Armenia, 11 kilometers southwest of Armavir
                    town. The memorial was designed by architect Rafael
                    Israelyan while the sculpting is by Ara Harutyunyan, Arsham
                    Shahinyan and Sambel Minasyan. The entrance is flanked by
                    huge winged oxen made of red tufa. A flight of steps leads
                    to a square from which a 26-metre-high bell tower rises. The
                    beautiful trellised structure with its twelve bells can be
                    seen from afar. The bells ring every year on the day of the
                    historic victory. The monument is guarded by massive ancient
                    style Armenian-winged lions, and is flanked by a memorial
                    garden for Karabakh (Arstakh) martyrs.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={shaki}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Shaki Waterfall
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Shaki Waterfall (Armenian: Շաքիի ջրվեժ) is a waterfall in
                    Armenia, with a height of 18 m. It is located in Syunik
                    Province. The Shaki Waterfall is situated 6 km from the town
                    of Sisian. On the left side of the river Vorotan's gorge,
                    basalt lava flows have solidified to form a ledge 18 meters
                    high from which the waterfall cascades down.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={tatev}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Tatev Monastery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The Tatev Monastery (Armenian: Տաթևի վանք, romanized:
                    Tat'evi vank') is a 9th-century Armenian Apostolic monastery
                    located on a large basalt plateau near the village of Tatev
                    in the Syunik Province in southeastern Armenia. The term
                    "Tatev" usually refers to the monastery. The monastic
                    ensemble stands on the edge of a deep gorge of the Vorotan
                    River. Tatev is known as the bishopric seat of Syunik and
                    played a significant role in the history of the region as a
                    center of economic, political, spiritual and cultural
                    activity. The Monastery of Tatev has been described as one
                    of the two best-known monasteries in Armenia, along with
                    Noravank in the province of Vayots Dzor. In the 14th and
                    15th centuries, the monastery hosted one of the most
                    important Armenian medieval universities, the University of
                    Tatev, which contributed to the advancement of science,
                    religion and philosophy, reproduction of books and
                    development of miniature painting. Scholars of the Tatev
                    University contributed to the preservation of Armenian
                    culture and creed during one of its most turbulent periods
                    in its history.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={tolors}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Tolors Reservoir
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Tolors (Armenian: Տոլորս; also Tolor) is a village in the
                    Sisian Municipality of the Syunik Province in Armenia.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={vahramashen}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Vahramashen Church
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The Vahramashen Church (Armenian: Վահրամաշեն եկեղեցի), also
                    commonly referred to as Vahramashen Surp Astvatsatsin or the
                    Church of Amberd) was built for Prince Vahram Pahlavuni of
                    the Pahlavuni family. An inscription on the inside lintel of
                    the north portal to the church dates its completion to the
                    year 1026. It sits along the slopes of Mount Aragats in the
                    Aragatsotn province of Armenia, between the fortress of
                    Amberd and near a wall along the promontory with the
                    Arkashian River in the canyon below.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>

              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px 5px",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={vorotnavank}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Vorotnavank Monastic Complex
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Vorotnavank (Armenian: Որոտնավանք) is a monastic complex
                    located along a ridge overlooking the Vorotan gorge, between
                    the villages of Vaghatin and Vorotan in the Syunik Province
                    of Armenia. The complex is surrounded by a high stone wall
                    for defense against foreign invasions and once housed
                    workshops, stores, a seminary, resort, cemetery and an
                    alms-house. A pillar stood in the yard of the monastery
                    symbolizing that there were monks entering into religious
                    service and kings inaugurated at this location. Hovhan
                    Vorotnetsi (1315-1398), an Armenian medieval philosopher and
                    theologian as well as the founder of Tatev Vardapetaran
                    University lived and worked at the monastery.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494833724">
                    <i className="fas fa-phone-square-alt callicon"></i>
                  </a>
                </CardActions>
              </Card>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default HotTours;
