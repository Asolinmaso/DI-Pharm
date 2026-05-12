import './MapSection.css'

const MapSection = () => {
  return (
    <section className="map-section">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.708274986731!2d80.1377012!3d12.851202400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525979fd195929:0xb7cd9c7ebf6fc1aa!2sDR.DI%20PHARMA%20CLINIC%20NURSING%20HOME%20AND%20PHARMA%20WHOLE%20SELLER!5e1!3m2!1sen!2sin!4v1778591100082!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="DI PHARMA Location Map"
          allow="storage-access"
        ></iframe>
      </div>
    </section>
  )
}

export default MapSection

