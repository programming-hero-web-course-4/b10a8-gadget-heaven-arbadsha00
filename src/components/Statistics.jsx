import { Helmet, HelmetProvider } from "react-helmet-async";

import { useLoaderData } from "react-router-dom";
import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const Statistics = () => {
  const data = useLoaderData();
  return (
    <HelmetProvider>
      <Helmet>
        <title>Statistics | Gadget Heaven</title>
      </Helmet>
      <div className="">
        <div className=" bg-primary mx-auto py-6 space-y-4 text-center">
          <h1 className="text-3xl font-bold text-white r">Statistics</h1>
          <p className="text-white w-4/5 md:w-3/5  mx-auto">
            Compare latest gadgets that will take your experience to the next
            level. From smart devices to the coolest accessories, we have it
            all!
          </p>
        </div>

        <div className="rounded-xl bg-white container px-4 mx-auto my-6 py-4">
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart width="100%" height={300} data={data} margin={{}}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="product_title" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend
                payload={[
                  {
                    value: "Price",
                    type: "square",
                    id: "ID01",
                    color: "#8884d8", // Set a custom color for the legend here
                  },
                  {
                    value: "Product",
                    type: "square",
                    id: "ID02",
                    color: "#A6A6A6", // Set a custom color for the legend here
                  },
                ]}
              />
              <Area
                name="Product"
                type="monotone"
                dataKey="price"
                fill="#efe1fb"
                stroke="#efe1fb"
              />
              <Bar barSize={30} dataKey="price" fill="#8884d8" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Statistics;
