export default function Section({title,children,...props})  { //All other props are merged into props object. This is a wrapper component
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}