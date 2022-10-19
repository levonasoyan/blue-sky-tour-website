import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import BasicModal from "../components/BasicModal";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ripo from "../assets/img/Saint Hripsime Church.jpg";
import Card from "@mui/material/Card";
import TourList from "../components/TourList";
import MobileMenu from "../components/MobileMenu";
import ClockLoader from "react-spinners/ClockLoader";
import amberd from "../assets/img/Amberd.jpg";
import trchkan from "../assets/img/Trchkan Waterfall.jpg";
import devil from "../assets/img/Devil Bridge.jpg";
import sardarapat from "../assets/img/Sardarapat Memorial.jpg";
import kecharis from "../assets/img/Kecharis Monastery.jpg";
import khndzor from "../assets/img/Khndzoresk Bridge.jpg";
import kobayr from "../assets/img/Kobayr Monastery.jpg";
import carahunge from "../assets/img/Carahunge.jpg";
import Bjni from "../assets/img/Bjni.jpg";
import Dendropark from "../assets/img/Dendropark.jpg";
import Dilijan from "../assets/img/Dilijan National Park.jpg";
import Dsegh from "../assets/img/Dsegh.jpg";
import Etchmiadzin from "../assets/img/Etchmiadzin Cathedral.jpg";
import Geghard from "../assets/img/Geghard Monastery.jpg";
import Goshavank from "../assets/img/Goshavank Monastery.jpg";
import Haghartsin from "../assets/img/Haghartsin Monastery.jpg";
import qarilich from "../assets/img/Lake Kari.jpg";
import Hovhannes from "../assets/img/Hovhannes Tumanyan's Museum.jpg";
import lori from "../assets/img/Lori Fortress.jpg";
import parz from "../assets/img/Parz Lake.jpg";
import Nicholas from "../assets/img/Saint Nicholas Church.jpg";
import sevanavank from "../assets/img/Sevanavank Monastery.jpg";
import gayane from "../assets/img/Saint Gayane Church.jpg";
import gevorg from "../assets/img/Saint Gevorg Monastery of Mughni.jpg";
import symphony from "../assets/img/Symphony of the stones.jpg";
import garni from "../assets/img/The Temple of Garni.jpg";
import zvartnots from "../assets/img/Zvartnots Cathedral.jpg";
import akhtala from "../assets/img/Akhtala Monastery.jpg";
import tatev from "../assets/img/Tatev Monastery.jpg";
import areni from "../assets/img/Areni Cave.jpg";
import chichkhan from "../assets/img/Chichkhan Waterfall.jpg";
import Gyumri from "../assets/img/wallpaper4.jpg";
import jermuk from "../assets/img/Jermuk Waterfall.jpg";
import virap from "../assets/img/Khor Virap Monastery.jpg";
import sanahin from "../assets/img/Sanahin Monastery.jpg";
import sevan from "../assets/img/Lake Sevan.jpg";
import lastiver from "../assets/img/Lastiver.jpg";
import mendzer from "../assets/img/''Mendz Er Cave''.jpg";
import shaki from "../assets/img/Shaki Waterfall.jpg";
import noravank from "../assets/img/Noravank Monastery.jpg";
import odzun from "../assets/img/Odzun Monastery.jpg";
import saghmos from "../assets/img/Saghmosavank Monastery.jpg";
import sainth from "../assets/img/Saint Hovhannes Chapel.jpg";
import tsaghkadzor from "../assets/img/Tsaghkadzor.jpg";

const MostWanted = () => {
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
          <MobileMenu />
          <Header />
          <TourList />
          <section
            className="tours"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            <h1 className="page__title">Most Wanted Tours</h1>
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

            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default MostWanted;
