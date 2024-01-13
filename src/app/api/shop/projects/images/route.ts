import image01 from '@public/mockProjectImages/003_50b52b03d8.jpg'
import image02 from '@public/mockProjectImages/004_39febda5dd.jpg'
import image03 from '@public/mockProjectImages/009_7319042ddf.jpg'
import image04 from '@public/mockProjectImages/010_2a16a9ec64.jpg'
import image05 from '@public/mockProjectImages/019_fcbc837a33.jpg'
import image06 from '@public/mockProjectImages/020_60c908ad64.jpg'
import image07 from '@public/mockProjectImages/021_de3a5ba1e8.jpg'
import image08 from '@public/mockProjectImages/022_0dfe46eaee.jpg'

export async function GET(request: Request) {
  const images = [
    image01,
    image02,
    image03,
    image04,
    image05,
    image06,
    image07,
    image08,
  ]

  const response = new Response(JSON.stringify(images))
  return response
}
