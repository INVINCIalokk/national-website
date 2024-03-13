import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"


const CoursesCard = () => {
  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-4xl mt-4 text-white font-semibold">Courses Offered </h1>
      <div className="flex py-10 px-20 justify-between w-full">
        <Card className="p-4 md:p-6 rounded-2xl md:w-80 w-full h-auto md:h-60 bg-contain bg-right-bottom bg-no-repeat bg-secondary cursor-pointer flex flex-col justify-between ">
          <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
              <p>Card Content</p>
          </CardContent>
          <CardFooter>
              <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>

  )
}

export default CoursesCard