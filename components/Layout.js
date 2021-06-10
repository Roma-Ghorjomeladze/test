import Header from './Header'
import Meta from './Meta'

export default function Layout(props) {
  return (
    <section className={`layout `}>
      <Meta
        siteTitle={props.siteTitle}
        siteDescription={props.siteDescription}
      />
      <div className="content">{props.children}</div>
      <style jsx>
        {`
          .layout {
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
          }
          .layout .info_page {
            color: #ebebeb;
          }
          .content {
          }
          @media (min-width: 768px) {
            .layout {
              display: block;
            }
            .content {
              flex-grow: none;
            }
          }
        `}
      </style>
    </section>
  )
}
