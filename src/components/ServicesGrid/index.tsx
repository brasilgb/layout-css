import ServiceContent from "./ServiceContent"

type Props = {}

const ServicesGrid = (props: Props) => {
    return (
        <section className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                <ServiceContent />
                <ServiceContent />
                <ServiceContent />
                <ServiceContent />
                <ServiceContent />
            </div>
        </section>

    )
}

export default ServicesGrid