import { Component } from 'preact';
import { Card, Layout, Grid } from 'preact-fluid';
import style from './style.css';

export default class About extends Component {
  render() {
    return(
      <div className="layout-example">
        <Grid columns={2}>
        <Cell width={1}>
           <Image
               responsive={[
                   {
                       src: "",
                       media: "(min-width: 320px)"
                   }
               ]}
               placeholder=""
               src=""
           />
        </Cell>
        <Cell>
          The GDG platform is a membership level within the wider Google Developers Community Groups
          program and it offers tailored support to organizers of local GDG chapters.

          GDGs are local groups of developers who are specifically interested in Google products and APIs.
          Each local group is called a GDG chapter and can host a variety of technical activities for
          developers - from just a few people getting together to watch our latest videos, to large gatherings with demos
          and tech talks, to hackathons.
        </Cell>
        </Grid>
      </div>
    )
  }
}
