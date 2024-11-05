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
        <title>Gadget Heaven | Statistics</title>
      </Helmet>
      <div className="my-10 container mx-auto px-4">
        <h1 className="text-2xl font-semibold">Statistics</h1>

        <div className="rounded-xl bg-white mx-auto my-6 py-4">
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart width="100%" height={300} data={data} margin={{}}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="product_title" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Area
                baseValue={1}
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
