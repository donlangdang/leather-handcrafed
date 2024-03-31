import BoxContent from './boxContent/BoxContent'


const fakeAPI = [
  {
    title: 'qui trình thiết kế và sản xuất',
    description: 'lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd '
  },
  {
    title: 'thiết kế',
    description: 'lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd '
  },
  {
    title: 'lựa chọn mẫu mã và loại da',
    description: 'lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd '
  },
  {
    title: 'vẽ và lên rập',
    description: 'lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd '
  },
  {
    title: 'cắt rập và làm theo mẫu đã được thiết kế',
    description: 'lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd lorem ádasda srwekfmwckem kèmkmaaaaaaaasmkd '
  }
]

function Content() {
  return (
    <>
      {fakeAPI.map((API) => (
        <BoxContent API={API} key={API.title} />
      ))}
    </>
  )
}

export default Content