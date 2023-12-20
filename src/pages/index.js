// @flow
import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import {
  Subtitle,
  Title,
  DescriptionView,
  Description,
  DescriptionText,
  DescriptionTitleGroup,
} from '../components/styles'
import '../css/main.min.css'

type Props = {
  data: Object,
}

export default class Index extends React.Component<Props> {
  render() {
    return (
      <Layout data={this.props.data}>
        <DescriptionView>
          <DescriptionTitleGroup>
            <Subtitle>Welcome To</Subtitle>
            <Title>Progression at Christex Foundation 🎉</Title>
          </DescriptionTitleGroup>
          <Description>
            <DescriptionText>
              This is where we keep the progression frameworks we use at
              Christex Foundation.
            </DescriptionText>
            <DescriptionText>
              Progression frameworks are tools that help us evaluate and pay our
              staff consistently, and help people understand how to progress in
              their work.
            </DescriptionText>
            <DescriptionText>
              Take a look around and let us know what you think! 🚀
            </DescriptionText>
            <DescriptionText>
              Our progression frameworks, adapted from those used in the
              industry, serve as the foundation for our evaluation and
              compensation processes.
            </DescriptionText>
          </Description>
        </DescriptionView>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            sidebarTitle
            sidebarGroup
          }
        }
      }
    }
  }
`
