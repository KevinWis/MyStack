import { CardImage} from "./style"
import {AnnounceImage,ColabImage,EmployImage,FreelanceImage,OpenSourceImage,SoftwareDeveloperImage,WelcomeImage} from "../../helpers/getImages"

const PageSucess = () => {
return (
<>
<CardImage>
<SoftwareDeveloperImage></SoftwareDeveloperImage>
</CardImage>


<CardImage>
<AnnounceImage></AnnounceImage>
</CardImage>

<CardImage>
<ColabImage></ColabImage>
</CardImage>

<CardImage>
<FreelanceImage></FreelanceImage>
</CardImage>

<CardImage>
<OpenSourceImage></OpenSourceImage>
</CardImage>

<CardImage>
<WelcomeImage></WelcomeImage>
</CardImage>

</>
)
}

export default PageSucess;