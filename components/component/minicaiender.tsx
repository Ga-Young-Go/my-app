/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tDQV4t02o2p
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-lg font-medium">May 2024</div>
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost">
            <ChevronLeftIcon className="w-5 h-5" />
          </Button>
          <Button size="icon" variant="ghost">
            <ChevronRightIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center">
        <div className="text-gray-500 dark:text-gray-400 font-medium">S</div>
        <div className="text-gray-500 dark:text-gray-400 font-medium">M</div>
        <div className="text-gray-500 dark:text-gray-400 font-medium">T</div>
        <div className="text-gray-500 dark:text-gray-400 font-medium">W</div>
        <div className="text-gray-500 dark:text-gray-400 font-medium">T</div>
        <div className="text-gray-500 dark:text-gray-400 font-medium">F</div>
        <div className="text-gray-500 dark:text-gray-400 font-medium">S</div>
        <div className="text-gray-400 dark:text-gray-600">28</div>
        <div className="text-gray-400 dark:text-gray-600">29</div>
        <div className="text-gray-400 dark:text-gray-600">30</div>
        <div className="text-gray-400 dark:text-gray-600">1</div>
        <div className="text-gray-400 dark:text-gray-600">2</div>
        <div className="text-gray-400 dark:text-gray-600">3</div>
        <div className="text-gray-400 dark:text-gray-600">4</div>
        <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center">5</div>
        <div className="text-gray-400 dark:text-gray-600">6</div>
        <div className="text-gray-400 dark:text-gray-600">7</div>
        <div className="text-gray-400 dark:text-gray-600">8</div>
        <div className="text-gray-400 dark:text-gray-600">9</div>
        <div className="text-gray-400 dark:text-gray-600">10</div>
        <div className="text-gray-400 dark:text-gray-600">11</div>
      </div>
    </div>
  )
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}