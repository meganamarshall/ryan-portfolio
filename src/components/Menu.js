import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Items from './Items';

const menuItems = [
  {
    id: 1,
    title: 'Bio',
    content: 'Portland, Oregon\'s Ryan Albert Miller is a forward-thinking guitarist, composer and improviser with a captivating new sound. Ryan is an active member of Portland\'s thriving creative music scene; uniquely fusing through-composition and nonlinear rock with avant garde leanings. Born in 1985, Ryan began playing guitar after a life-altering battle with cancer when he was 12 years old. After quickly connecting to the instrument. he concentrated his efforts on composition and alternate techniques. Ryan currently performs and composes music for the longstanding trio U Sco (New Atlantis Records), Teton (Pretty Purgatory) and for solo guitar. Released in November 2018 on Ambition Sound Records, Atrophy Torque Fly is Ryan’s second solo release; a follow up to 2011’s Hex Fortunes. Atrophy Torque Fly fuses through-composition & improvisation featuring frequent collaborators: Noah Bernstein (Alto Sax), Andrew Jones (Upright) & Philip Cleary (Drumset). "The music that I compose is always a stream of consciousness, albeit refined by incessant development and practice. Hex Fortunes is one 25 minute composition, divided into 4 suites. Atrophy Torque Fly is approximately 40 minutes of music and 9 compositions that I\'ve been developing over the last 7 years." '
  },
  {
    id: 2,
    title: 'Music',
    content: '|ambitionsound.bandcamp.com/releases| |ryanamiller.bandcamp.com| |witheyesabstract.bandcamp.com| |usco.bandcamp.com|'
  },
  {
    id: 3,
    title: 'Press',
    content: '“Whoever thought prog and punk would be so suited for each other? Certainly the possibility of a compromise occurred to Robert Fripp (look no further than Red-era King Crimson for an example of early prog-punk-rock, which was one of his better ideas). Ryan Miller, guitarist in the Portland-based progressive, experimental, post-whatever band U Sco, has also combined the two almost contradictory styles with ambiguous and riveting results. It\'s essentially aggressive progressive rock, but stripped of (most) of the unpleasant excesses and regurgitated medieval allusions associated with the genre. In other words, it\'s restless and exciting as hell, while still containing elements that will stimulate your classically trained friend\'s ears.” -Morgan Troper, The Portland Mercury “Ryan Miller\'s conception of technique and musical structure is wholly unique. The intensity in his performances moves in tandem with the humility and lyricism that actually propel the soul of his work.” - Sam Adams, Musician "...I hate referencing Don Caballero twice in one week but there it is; also Omar Rodriguez-Lopez (old solo stuff), Upsilon Acrux; you know, the regulars. I figured Mick Barr would be a good call as a reference, guitar-wise, though Miller plays his six-string closer to the vest, investing in linear riffs and breaks while fulfilling his rhythmic duties aptly." - Grant Purdum, Tiny Mix Tapes “Ryan Miller’s interpretation of the guitar fretboard is boundless and exhilarating, and drummer Phil Cleary commands the kit with both restraint and frenzy. Treffpunkt teeters on the edge of chaos, tip-toeing on the brink of abstraction, while keeping rooted in its composition. Their creatively is tireless and the tracks pass too quickly, a difficult feat considering their intricacies. While every song on Treffpunkt is unique, they blend into the same style, which makes it difficult to single out a favorite, although “Iguana House” is notably scathing. Simply put, every track has something fantastic to offer.”- Aaron Maltz, Invisible Oranges'
  },
  {
    id: 4,
    title: 'Contact Ryan',
    content: 'Email: ryanalbertmiller@gmail.com'
  }
];

class Menu extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  }

  state = {
    visibleId: undefined
  }

  handleClick = (id) => {
    if(id === this.state.visibleId) {
      this.setState({ visibleId: undefined })
    } else {
      this.setState({ visibleId: id });
    }
  }

  render() {
    return (
      <Items items={menuItems} visibleId={this.state.visibleId} onClick={this.handleClick} />
    );
  }
}

export default Menu;
