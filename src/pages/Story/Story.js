import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Story.css';
import michael from './michael.png';
import storyBackground from './story-background.png';

function Story()
{
    return (
        <div className="story">
            <section className="story-hero" style={{ backgroundImage:"url('./story-background.png')" }}>
                <img className="story-bg-image" alt="Story Background" src={storyBackground} />
                <Container>
                    <Row className="story-introduction">
                        <Col>
                            <h1>Our Story</h1>
                            <h2>The foundation was born from loss...</h2>
                            <p>
                                Little Souls at Rest Foundation was created after we lost our son, Michael. I was at a routine appointment when the doctor told me that there was no heart beat. We delivered our beautiful baby boy, Michael, on July 27, 2018. The room went silent and we stared in amazement at our son. He was physically complete in every way. He only needed time to grow. Only 6 ounces, and yet he was a part of our family forever, and we were in love. After a few minutes of intense emotions, we were faced with the reality of making funeral arrangements. We tried to get as many of the burial arrangements done the night before, but we had so many questions. Little did we know, there was no streamlined process for babies like Michael. He was born before 20 weeks and weighed less than 350 grams. There were little to no burial resources for babies like him, and we were left to try to figure out how to make arrangements for him on our own.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="story-banner-1">
                <Container>
                    <Row className="banner-1-row">
                        <Col xs={3} md={{ span: 2, offset: 1 }} className="banner-1-col-1">
                            <img src={michael} alt="Michael" width="154" height="203" />
                        </Col>
                        <Col xs={{ span:8, offset: 1 }} md={{ span: 9, offset: 0 }} className="banner-1-col-2">
                            <p>
                                Little Souls at Rest was founded so all babies, no matter how small, are able to have a resting place. We also offer a streamlined burial process to families so they can focus on their grief. We are honored to help every family that comes to Little Souls at Rest for help.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="story-main">
                <Container fluid className="main-story-container">
                    <div className="main-story">
                        <h1>The Vozzella Family</h1>
                        <p>It began as a regular routine appointment with my little Julianne by my side.</p>
                        <p>
                            The nurse, who could never find a heartbeat (she was new) could not find the heartbeat yet again. The doctor came in and after a few seconds, I realized it wasn’t like “every other time.” He laid the monitor down and said, “I cannot find the heartbeat. Let’s move you to the sonogram room and we will look there.” My daughter jumped up and said “Mom, the baby is playing hide and seek….how funny.” The nurse immediately bribed Julianne to leave the room with brownies. The sonogram started, and finally the doctor said, “I am so sorry Jena, but there is no longer a heartbeat.” Everything from there on was a blur. I got dressed, the doctor started making arrangements to deliver the next morning, I grabbed a slip and opened the door to see little Julianne eating a brownie and looking at me for a response. I had to tell her that the baby left to heaven a bit earlier than we thought. Tears were shed and I finally made it home. My husband was called and he rushed home immediately.
                        </p>
                        <p>
                            From there, we went into work mode:
                            <ol className="text-left">
                                <li>Find someone to watch the girls while we are delivering this baby</li>
                                <li>Pack clothes for the hospital</li>
                                <li>Cancel our entire schedule for three days</li>
                                <li>Call our parents and family because we were going to need as much prayer and help as we can get</li>
                                <li>Burial services</li>
                            </ol>
                        </p>
                        <p className="text-left pl-md-4 pl-sm-1">
                            There were so many questions:
                            <br /><br />
                            How do you plan a funeral?
                            <br />
                            Who do you call to make funeral arrangements?
                            <br /><br />
                            What cemeteries bury babies?
                            <br />
                            Do they have special accommodations for babies?
                            <br />
                            Where does the baby go until the funeral?
                            <br />
                            Do we transport the baby to the cemetery?
                            <br />
                            Who prepares the cemetery plot?
                            <br />
                            Is cremation an option?
                            <br />
                            How much does the funeral cost?
                            <br />
                            How much does the burial cost?
                            <br />
                        </p>
                        <p>
                            We called many places and people that I thought would know what to do. No one had an answer or could even point us in any direction. We ended up on Google.com. My husband Alfred was making calls on one phone and I was on the other. There were so many questions to answers we did not know; there were so many expenses we did not budget for. <b><i>This part was a total nightmare.</i></b> Finally, after hours of calls, fees, notes, etc., we fell asleep and left for the hospital by 8 am.
                        </p>
                        <p>
                            After travel arrangements, several connecting flights, and a taxi from the airport, my mom walked through the hospital door. There we were! In the delivery room, hooked up to monitors and giving birth... <b><i>14 hours later.</i></b>
                        </p>
                        <p>
                            We delivered our beautiful baby boy, <b>Michael Joseph Vozzella.</b> The room went silent and we stared in amazement at our son. We were not prepared for what we saw. He was physically complete in every way. He only needed time to grow. This was our son. Only 6 ounces, and yet he was a part of our family forever and we were in love. After a few minutes of immense emotions, we were back to the reality of making funeral arrangements.
                        </p>
                        <p>
                            The hospital was wonderful but the funeral arrangements were totally up to us. We finally found a friend who told us about a funeral home that she worked with. We called, and within 6 hours all we knew is they were picking up our son and that the rest of the arrangements would happen in the coming days.
                        </p>
                        <p>
                            Through this very difficult experience, there were many small miracles and we were shown tremendous charity. We called the funeral the next morning and the director answered. “ I spent the morning with Michael and we would like to gift you his casket.”
                        </p>
                        <p>
                            In the meantime, I reached out to a Facebook group asking for information and a girl answered. I met her through a circle of homeschool moms. I called her and she told me about a cemetery in Wylie, where her son is buried. I called the Church affiliated with the cemetery and through another small miracle, we were able to bury Michael there.
                        </p>
                        <p>
                            We buried Michael the following Tuesday, near the most beautiful tree, and next to my friend’s son. It truly was a gift from God, offered through many wonderful people.
                        </p>
                        <p>
                            Two weeks after being in a fog, I knew Alfred and I had the obligation of giving back what we had been given. Every family should have the right to bury their child and it should not cause heartache—in the most difficult of times—to make those arrangements.
                        </p>
                        <p>
                            We realized that very few families would find the same resources that were made available to us. We wanted to provide the same level of support for others and could only do so by creating something new.
                        </p>
                    </div>
                </Container>
            </section>

            <section className="story-banner-2">
                <Container>
                    <Row>
                        <Col>
                            <h2>This is what the foundation does</h2> <br /><br />
                            <h1>This is Little Souls at Rest Foundation</h1>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Story;
