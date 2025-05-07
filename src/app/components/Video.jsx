
export default function Video({id}) {
  return (
    <div className="aspect-video">
        <iframe 
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        />
    </div>
  )
}
