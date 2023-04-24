import Switch from '@/components/Switch.jsx'
import {
    Section,
    Title
} from '@/components/index.jsx'

export default function Works() {
    return <Section center>
        <Title>Trabajos</Title>
        <Switch tabs={tabs}>
        </Switch>
    </Section>
}

const tabs = [
  {
    label: 'Website',
    src: '/static/dev-web.svg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit maiores impedit delectus enim unde amet accusamus quis reprehenderit asperiores nobis.'
  },
  {
    label: 'Mobile',
    src: '/static/dev-app.svg',
    description: 'Lorem ipsum dolor sit ameti, consectetur adipisicing elit. Fugit maiores impedit delectus enim unde amet accusamus quis reprehenderit asperiores nobi.'
  }
]