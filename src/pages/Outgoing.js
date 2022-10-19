import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import BasicModal from "../components/BasicModal";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import TourList from "../components/TourList";
import MobileMenu from "../components/MobileMenu";
import ClockLoader from "react-spinners/ClockLoader";
import Madrid from "../assets/img/Madrid.jpg";
import vienna from "../assets/img/vienna.jpg";
import stockholm from "../assets/img/stockholm.jpg";
import sharm from "../assets/img/sharm.jpg";
import sharjah from "../assets/img/sharjah.jpg";
import abu from "../assets/img/Abu Dhabi.jpg";
import Spain from "../assets/img/Spain.jpg";
import Scotland from "../assets/img/Scotland.jpg";
import Poland from "../assets/img/Poland.jpg";
import albania from "../assets/img/Albania.jpg";
import bali from "../assets/img/Bali.jpg";
import Sochi from "../assets/img/Sochi.jpg";
import Georgia from "../assets/img/Georgia.jpg";
import Germany from "../assets/img/Germany.jpg";
import Tbilisi from "../assets/img/Tbilisi.jpg";
import Netherlands from "../assets/img/Netherlands.jpg";
import London from "../assets/img/London.jpg";
import Barcelona from "../assets/img/Barcelona.jpg";
import Rome from "../assets/img/Rome.jpg";
import Moscow from "../assets/img/Moscow.jpg";
import Batumi from "../assets/img/Batumi.jpg";
import Berlin from "../assets/img/Berlin.jpg";
import Crete from "../assets/img/Crete.jpg";
import Cyprus from "../assets/img/Cyprus.jpg";
import Dubai from "../assets/img/Dubai.jpg";
import Egypt from "../assets/img/Egypt.jpg";
import Hurghada from "../assets/img/Hurghada.jpg";
import Italy from "../assets/img/Italy.jpg";
import croatia from "../assets/img/croatia.jpg";
import prague from "../assets/img/prague.jpg";
import portugal from "../assets/img/portugal.jpg";
import marcel from "../assets/img/marcel.jpg";
import Maldives from "../assets/img/Maldives.jpg";
import Milan from "../assets/img/Milan.jpg";
import Montenegro from "../assets/img/Montenegro.jpg";
import paris from "../assets/img/paris.jpg";
import Iran from "../assets/img/Iran.jpg";
import Qatar from "../assets/img/Qatar.jpg";
import sanmarino from "../assets/img/san marino.jpg";
import rhodes from "../assets/img/rhodes.jpg";
import Japan from "../assets/img/Japan.jpg";
import China from "../assets/img/China.jpg";
import Belgium from "../assets/img/Belgium.jpg";
import monaco from "../assets/img/monaco.jpg";
import Norway from "../assets/img/Norway.jpg";
import saintp from "../assets/img/Saint Petersburg.jpg";

import copenhagen from "../assets/img/copenhagen.jpg";
const Outgoing = () => {
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
            <h1 className="page__title">Outgoing Tours</h1>
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
                  image={vienna}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Vienna
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Vienna lies in the northeastern corner of Austria, between
                    the foothills of the Alps and the Carpathians, where the
                    Danube , Europe's second longest river, has cut its course
                    through the mountains. Vienna is known as the "City of
                    Music" due to its musical legacy, as many famous classical
                    musicians such as Beethoven and Mozart called Vienna home.
                    Vienna is also said to be the "City of Dreams" because it
                    was home to the world's first psychoanalyst, Sigmund Freud.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={stockholm}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Stockholm
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Stockholm is the capital and largest city of Sweden as well
                    as the largest urban area in Scandinavia. Stockholm is famed
                    for its iconic city hall, the world's first open-air museum
                    and the fabulous Abba museum. But there are plenty of
                    little-known facts about this city that even some locals
                    might not be aware of – including an unusual story about
                    Frank Zappa.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={sharm}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Sharm El-Sheikh
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Sharm el-Sheikh is an Egyptian resort town between the
                    desert of the Sinai Peninsula and the Red Sea. It's known
                    for its sheltered sandy beaches, clear waters and coral
                    reefs. Surrounded by some of the world's most incredible
                    dive sites, this peninsula, 38 kilometers south of Sharm, is
                    home to glorious beaches with excellent snorkeling just
                    offshore, the world's second most northerly mangrove forest,
                    and a saltwater lake.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={sharjah}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Sharjah
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Sharjah is the third-most populous city in the United Arab
                    Emirates, after Dubai and Abu Dhabi, forming part of the
                    Dubai-Sharjah-Ajman metropolitan area.Sharjah is regarded as
                    the cultural capital of the UAE, and was the Islamic culture
                    capital in 2014. Sharjah was named World Book Capital for
                    2019 by UNESCO.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={abu}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Abu Dhabi
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Abu Dhabi, the capital of the United Arab Emirates, sits off
                    the mainland on an island in the Persian Gulf. Between its
                    natural islands and luxury resorts, shifting sand dunes and
                    cool oases, the emirate holds something for every traveler.
                    What's more, the city of Abu Dhabi, located just an hour and
                    20 minute drive from Dubai, was recently named the safest
                    city in the world by Numbeo's Safe City Index.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={albania}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Albania
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Albania, on Southeastern Europe’s Balkan Peninsula, is a
                    small country with Adriatic and Ionian coastlines and an
                    interior crossed by the Albanian Alps. With a fascinating
                    history, natural beauty, to-die-for Mediterranean cuisine,
                    and a bundle of eccentricity, as Albania is known in its
                    native tongue, is Europe's unpolished diamond.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={bali}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Bali
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Bali is a province of Indonesia and the westernmost of the
                    Lesser Sunda Islands. Bali is a mesmerizing island which is
                    world famous for its beautiful places, rich culture,
                    history, arts and crafts, gorgeous beaches, and many more
                    things.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={Barcelona}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Barcelona
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Barcelona, the cosmopolitan capital of Spain’s Catalonia
                    region, is known for its art and architecture. Barcelona is
                    famous for its outstanding football team, stunning
                    architecture, lively nightlife, sandy beaches, and
                    world-class cuisine. Not to mention a vibrant cultural
                    heritage and colourful neighbourhood festivals that attract
                    visitors from around the world.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={Batumi}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Batumi
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Batumi, a Black Sea resort and port city, is the capital of
                    the Georgian republic of Adjara. It is situated in a
                    subtropical zone at the foot of the Caucasus. Much of
                    Batumi's economy revolves around tourism and gambling (it is
                    nicknamed "The Las Vegas of the Black Sea"), but the city is
                    also an important seaport and includes industries like
                    shipbuilding, food processing and light manufacturing.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={Berlin}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Berlin
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Berlin, Germany’s capital, dates to the 13th century. Berlin
                    is famous for its many museums such as the Dahlem Museums,
                    the Egyptian Museum, the Berlin Cultural Forum with the New
                    National Gallery, and the Museum of Arts and Crafts. A
                    first-time visit to Berlin is bound to be an absolutely
                    incredible experience, filled with an eclectic mix of
                    history, culture and gorgeous sights, it's a city that
                    intrigues yet embraces us visitors with open arms.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={Crete}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Crete
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The largest island in Greece, Crete is a diverse and vibrant
                    land packed with ancient ruins, buzzing cities and
                    breathtaking beaches. Many people come here for the sun, sea
                    and sand yet the best things to do in Crete include much
                    more than the standard package vacation.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={Cyprus}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Cyprus
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Cyprus, officially the Republic of Cyprus, is an island
                    country in the eastern Mediterranean Sea south of the
                    Anatolian Peninsula. Cyprus is famous for the Limassol
                    carnival, Wreck diving, Haloumi cheese and Commandaria, the
                    sweet dessert wine from Cyprus. Background: Cypriot culture
                    is among the oldest in the Mediterranean.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={Dubai}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Dubai
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Archaeologists believe that Dubai grew out of a tiny village
                    on the Shindaga Peninsula. A convenient natural bay, located
                    at the intersection of trade routes, has been used for a
                    long time and ships from the ancient states of Mesopotamia
                    came here. Here one could meet fishermen and Bedouins,
                    merchants and pirates, pearl divers and rich overseas
                    guests.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={Egypt}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Egypt
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Egypt, a country linking northeast Africa with the Middle
                    East, dates to the time of the pharaohs. Egypt is very
                    famous for its ancient civilization and the monuments of the
                    majestic pharaohs, such as the Great Pyramids of Giza, the
                    Great Sphinx, the Egyptian Museum, the GEM (The Grand
                    Egyptian Museum), Sakkara, and Dahshur.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={Hurghada}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Hurghada
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Hurghada is a beach resort town stretching some 40km along
                    Egypt’s Red Sea coast. It’s renowned for scuba diving, and
                    has numerous dive shops and schools in its modern Sekalla
                    district. There are many restaurants, bars and nightclubs,
                    while the old town, El Dahar, is home to traditional
                    Egyptian coffee shops and souks.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={Italy}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Italy
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Italy, a European country with a long Mediterranean
                    coastline, has left a powerful mark on Western culture and
                    cuisine. Italy is famous for the Renaissance and the
                    incredible artists it produced. Italy is famous for its
                    tourism, its art cities and unique scenery. Italy is also
                    known for its language, its opera, its fashion and its
                    luxury brands. It is also known for its football team!
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={marcel}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Marseille
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Marseille, a port city in southern France, has been a
                    crossroads of immigration and trade since its founding by
                    the Greeks circa 600 B.C. Feisty, cosmopolitan, but still
                    very French, the historic port city of Marseille makes the
                    perfect short break destination. Enjoy great food, beautiful
                    beaches and a buzzing cultural scene.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={Maldives}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Maldives
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Maldives, officially the Republic of Maldives, is an
                    archipelagic country in the Indian subcontinent of Asia,
                    situated in the Indian Ocean. The Maldives is famous for a
                    number of reasons, including its vibrant culture, pristine
                    beaches, sprawling greenery, and fascinating landmarks.
                    Apart from the numerous enchanting landmarks, Maldives is
                    also famous for water sports and other adventure activities.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={Milan}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Milan
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Milan, Italian Milano, city, capital of Milano province and
                    of the region of Lombardy, northern Italy. It is the leading
                    financial centre and the most prosperous manufacturing and
                    commercial city of Italy. Milan is worth visiting for its
                    abundance of historical, cultural, and architectural
                    landmarks. Music fans will love the famous theater La Scala;
                    architecture buffs – the imposing Duomo Cathedral; art
                    lovers – the fantastic Pinacoteca Brera; and luxury shoppers
                    – the glamorous Galleria Vittorio Emanuele II.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={Montenegro}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Montenegro
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Montenegro is a Balkan country with rugged mountains,
                    medieval villages and a narrow strip of beaches along its
                    Adriatic coastline. Montenegro is still choker packed with
                    pretty little towns, gorgeous beaches, a stunning coastline,
                    great restaurants and rugged mountains. Durmitor National
                    Park is the place to be if you love hiking. If you're
                    visiting Montenegro for romance then make sure you visit
                    Perast.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={paris}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Paris
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The tallest iron building in Paris is the Eiffel Tower, the
                    decoration of the 1889 World's Fair. Its technical data are
                    amazing: more than 15 thousand metal parts connected by more
                    than two million rivets make up an iron "lace" of 9 thousand
                    tons. This architectural structure caused rejection by many.
                    Now it is the personification of Paris. Like a magnet, it
                    attracts millions of people from all over the world.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={Qatar}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Qatar
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Qatar, officially the State of Qatar, is a country in
                    Western Asia. It is a high-income economy, backed by the
                    world's third-largest natural gas reserves and oil reserves.
                    Qatar is the world's largest exporter of liquefied natural
                    gas, and the world's largest emitter of carbon dioxide per
                    capita. Visitors are spoiled for choice, with a range of
                    attractions from museums and galleries, markets, sports,
                    desert safaris by the spectacular Inland Sea or the
                    UNESCO-listed Al Zubarah Fort.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={rhodes}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Rhodes
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Rhodes, the largest of Greece’s Dodecanese islands, is known
                    for its beach resorts, ancient ruins and remnants of its
                    occupation by the Knights of St. John during the Crusades.
                    Rhodes has been famous since antiquity as the site of
                    Colossus of Rhodes, one of the Seven Wonders of the Ancient
                    World. The citadel of Rhodes, built by the Hospitalliers, is
                    one of the best-preserved medieval towns in Europe, which in
                    1988 was designated as a UNESCO World Heritage Site.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={Rome}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Rome
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    April 21, 753 BC Romulus and Remus, fed by a she-wolf, laid
                    the first stones of the Eternal City - as Rome is called. It
                    is located among the hills of Lazio on the banks of the
                    Tiber. Rome is a city incomparable with any other. All the
                    epochs he lived through left their unique features in his
                    architecture. Not only monuments of antiquity have been
                    preserved, but also entire architectural ensembles of that
                    distant era, medieval quarters and churches of the
                    Renaissance, as well as later times. Even the fountains in
                    this city are special.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={Belgium}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Belgium
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Belgium, a country in Western Europe, is known for medieval
                    towns, Renaissance architecture and as headquarters of the
                    European Union and NATO. Belgium is world-famous for its
                    chocolate, waffles, beer, and its national football team,
                    the Red Devils.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={China}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    China
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    China, officially the People's Republic of China, is a
                    country in East Asia. It is the world's most populous
                    country, with a population of more than 1.4 billion. China
                    is known as 'the factory of the world”. It is the world's
                    largest producer of concrete, steel, fertilizer, clothing,
                    and toys. China is known for its architectural wonders such
                    as the Great Wall and Forbidden City, its staggering variety
                    of delicious food, its martial arts, and its long history of
                    invention. More than just tea and temples, China is a
                    fast-changing mix of the ultra-modern and the very ancient.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={copenhagen}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Copenhagen
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Copenhagen, Denmark’s capital, sits on the coastal islands
                    of Zealand and Amager. Copenhagen is known for being the
                    city of fairy tales. Reputed to be happiest city in the
                    world, Copenhagen is known for its canals, excellent food,
                    Tivoli Gardens and for once being home to the children's
                    writer, Hans C Andersen. It is also famous for the Danish
                    language, its community spirit and the beer breweries.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={croatia}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Croatia
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Croatia, officially the Republic of Croatia, is a country at
                    the crossroads of Central and Southeast Europe. Croatia is
                    famous for its major cities such as Zagreb, Dubrovnik, and
                    Havar, as well as the Dalmatian coast and islands. Croatia
                    is also known for Krka National Park, as well as unique
                    traditions including the Rijeka Carnival and unique foods
                    such as Pag cheese and Lisitar cookies.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={Georgia}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Georgia
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Georgia, a country at the intersection of Europe and Asia,
                    is a former Soviet republic that’s home to Caucasus Mountain
                    villages and Black Sea beaches. It’s famous for Vardzia, a
                    sprawling cave monastery dating to the 12th century, and the
                    ancient wine-growing region Kakheti. Georgia is a developing
                    country, classified as "very high" on the Human Development
                    Index.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={Germany}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Germany
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Germany is a Western European country with a landscape of
                    forests, rivers, mountain ranges and North Sea beaches.
                    Germany is a diverse country with many attractions! The
                    combination of old world charm and modern urban cities make
                    it an ideal destination for travelers. With a wide array of
                    food, accomodations and drink options, Germany is
                    traditionally less expensive to travel to than its other
                    European counterparts.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={Iran}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Iran
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Iran, also called Persia, and officially the Islamic
                    Republic of Iran, is a country in Western Asia. Iran has one
                    of the oldest, richest and most influential art heritages in
                    the world which encompasses many disciplines including
                    literature, music, dance, architecture, painting, weaving,
                    pottery, calligraphy, metalworking and stonemasonry.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={Japan}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Japan
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Japan is an island country in East Asia. Japanese culture is
                    rich in values and heritage handed down for generations. It
                    focuses on respect and dignity with a deep sense of honor.
                    Arts, literature, and poetry are coveted and referred to as
                    “living national treasures.” When you visit Japan, you can
                    expect to be treated with dignity and politeness.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={London}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    London
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    London, the capital of England and the United Kingdom, is a
                    21st-century city with history stretching back to Roman
                    times. Whether you're looking for art or architecture, food
                    or football, London has been honed into a genuinely
                    incredible city through its 2,000-year history. London is
                    famous for its art, architecture, food and fashion, some of
                    which it does better than anywhere else in the world.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={Madrid}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Madrid
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Madrid is the capital and most populous city of Spain.
                    Madrid is known for its historical buildings, food markets,
                    and the royals. It's also known for its renaissance and
                    contemporary art museums, sunny blue skies, unique
                    neighborhoods, and bustling nightlife. Madrid is a city of
                    joy and life.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={monaco}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Monaco
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Monaco, officially the Principality of Monaco, is a
                    sovereign city-state and microstate on the French Riviera a
                    few kilometres west of the Italian region of Liguria, in
                    Western Europe, on the Mediterranean Sea.Monaco, a sovereign
                    city-state on the French Riviera, is known as a
                    "Billionaires' Playground." The tiny city-state is famous
                    for its lavish wealth, casinos, and glamorous events such as
                    the Monaco Yacht Show and the Monaco Grand Prix.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={Moscow}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Moscow
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Moscow is the capital and largest city of Russia. The city
                    is home to several UNESCO World Heritage Sites, and is well
                    known for its display of Russian architecture, particularly
                    its historic Red Square, and buildings such as the Saint
                    Basil's Cathedral and the Moscow Kremlin, of which the
                    latter serves as the seat of power of the Government of
                    Russia.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={Netherlands}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Netherlands
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The Netherlands, a country in northwestern Europe. The
                    Netherlands may be a small country, but it is known for many
                    things. The country is most known for its cheese, wooden
                    shoes, windmills, tulips, coffeeshops, canals of Amsterdam,
                    Delftware, soccer, bicycles, DJs, painters, genever, and
                    countryside.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={Norway}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Norway
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Norway is a Scandinavian country encompassing mountains and
                    glaciers. There are many reasons to visit Norway. Mountains,
                    fjords, Northern Lights, Sami culture, whale watching and so
                    much more is waiting for you, and the Norwegian people will
                    be happy to welcome you. If you visit Norway we can
                    guarantee you once-in-a-liftetime experiences and a chance
                    to check off your bucketlist.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={Poland}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Poland
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Poland, officially the Republic of Poland, is a country in
                    Central Europe. Poland is known for being the home of
                    delicious pierogi, former pope John Paul II, and Europe's
                    most ancient old-growth forest. It is also a country rich in
                    unique history and stunning geography, from the Tatra
                    mountains to the Baltic Sea.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={portugal}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Portugal
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Portugal is a southern European country on the Iberian
                    Peninsula, bordering Spain. Portugal is famous for its
                    typical seafood dishes, popular beach destinations, and 16th
                    to 19th century architecture, from when this country was a
                    powerful maritime empire. It's also known for its soccer
                    legends, fado music, historical cities, and port wine.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={prague}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Prague
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Prague is the capital of the Czech Republic, stretching
                    along both banks of the Vltava River and known as the City
                    of a Hundred Spires. The heart of the historical center of
                    the city is the Old Town Square, surrounded by colorful
                    baroque buildings, Gothic churches and the medieval town
                    hall with the astronomical clock Prague Astronomical Clock,
                    in which figures move every hour. The pedestrian Charles
                    Bridge, completed in 1402, is decorated with statues of
                    Catholic saints.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={saintp}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Saint Petersburg
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    St. Petersburg is a Russian port city on the Baltic Sea. It
                    was the imperial capital for 2 centuries, having been
                    founded in 1703 by Peter the Great, subject of the city's
                    iconic “Bronze Horseman” statue. St Petersburg is home to
                    Russia's best preserved and most elaborate constructions
                    from the extravagant Tsarist era. Brimming with baroque
                    palaces, classical sculptures, royal gardens, and grandiose
                    cathedrals, you can not simply miss to visit St Petersburg
                    in your lifetime.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={sanmarino}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    San Marino
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    San Marino is a mountainous microstate surrounded by
                    north-central Italy. There are so many reasons to visit San
                    Marino! Spectacular views, fairytale castles, picturesque
                    medieval streets, friendly people, fantastic atmosphere,
                    delicious food, and cheap prices.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={Scotland}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Scotland
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Scotland is a country that is part of the United Kingdom.
                    Scotland is known for its rich varieties of whisky. Visiting
                    one of the 109 distilleries is a fantastic way to taste the
                    country's national drink during your time in Scotland.
                    Historically, the production of Scottish whisky dates back
                    to the 11th century.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={Sochi}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Sochi
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Sochi, a Russian city on the Black Sea, is known as a summer
                    beach resort, and was host of the 2014 Winter Olympics.
                    Sochi is famous for its tea plantations, most northerly
                    located in Europe, owing to the experienced tea grower I. A.
                    Koshman, who was the first in 1901 to produce the tea
                    variety adapted to that climate. Thus, Russia got its own
                    brand of tea with a special unique flavor. Sochi is Russia's
                    busiest seaside resort, attracting more than 4 million
                    visitors every year to its mountains and sweeping beaches.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={Spain}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Spain
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Spain or the Kingdom of Spain is a country in southwestern
                    Europe with parts of territory in the Atlantic Ocean and
                    across the Mediterranean Sea. Spain may be renowned for its
                    beaches and sunny climes, but it is a country of diverse
                    landscapes. Its mountains are majestic, from the northern
                    Pyrenees and the Picos de Europa to the Sierra Nevada in the
                    south (home to Europe's most southerly ski resort) and the
                    Mount Teide volcano on the Canary Island of Tenerife.
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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
                  image={Tbilisi}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  Tbilisi
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Tbilisi in some languages still known by its pre-1936 name
                    Tiflis is the capital and the largest city of Georgia, lying
                    on the banks of the Kura River with a population of
                    approximately 1.5 million people.Tbilisi is busy, vibrant
                    and worth a visit. You should travel to Tbilisi to see
                    beautiful capital with numerous Tbilisi attractions that
                    will keep you occupied for at least 2-3 days. Old Tbilisi,
                    the main touristic spot, looks like from a fairy tale
                    really!
                  </Typography>
                </CardContent>
                <CardActions>
                  <BasicModal />
                  <a href="tel:+37494421443">
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

export default Outgoing;
