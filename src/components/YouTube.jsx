export function YouTube({ videoId }) {
  return (
    <div className="youtube">
      <iframe
        title="YouTube"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
