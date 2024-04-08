export default function ButtonBox({children}) {
  return (
    <div className="grid relative grid-cols-4 gap-4 mt-3">
      {children}
    </div>
  )
}