import { TightLayout } from "../../components/TightLayout";
import { CiWarning } from "react-icons/ci";
function NotFound() {
  return (
    <TightLayout>
      <div className="flex-grow flex items-center justify-center flex-col bg-secundary m-5 rounded-lg">
        <span>
          <CiWarning className="text-tertiary text-[300px]"></CiWarning>
        </span>
        <p className="text-3xl text-center">Eror 404</p>
        <p className="text-lg text-center">The specified route was not found</p>
      </div>
    </TightLayout>
  );
}

export { NotFound };
