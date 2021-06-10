import Header from './Header'
import Meta from './Meta'

export default function Layout(props) {
  const data = {
    frontmatter: { image: '/static/0 Frontpage 2.png', title: 'title' },
  }
  return (
    <section
      className={`layout ${props.pathname == 'info' && 'info_page'}`}
      style={{
        backgroundColor: `${props.bgColor && props.bgColor}`,
        color: `${props.pathname == 'info' && 'white'}`,
      }}
    >
      <Meta
        siteTitle={props.siteTitle}
        siteDescription={props.siteDescription}
      />
      <Header data={data} />
      <div className="content">{props.children}</div>
      <style jsx>
        {`
          .layout {
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          .layout .info_page {
            color: #ebebeb;
          }
          .content {
            flex-grow: 1;
          }
          @media (min-width: 768px) {
            .layout {
              display: block;
            }
            .content {
              flex-grow: none;
              width: 70vw;
              margin-left: 30vw;
            }
          }
        `}
      </style>
    </section>
  )
}
