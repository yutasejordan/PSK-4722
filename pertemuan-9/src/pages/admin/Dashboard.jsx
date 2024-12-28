import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPostsList(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <h1 className="font-semibold text-xl mb-2">Admin Dashboard</h1>
      <h1 className="font-medium text-lg mb-4 text-center">
        Hasil fetch data dari api jsonplaceholder
      </h1>
      <table className="w-full text-center border-collapse">
        <thead className="border-2 border-black">
          <tr className="bg-gray-300">
            <th className="p-2.5 border-2 border-black">No</th>
            <th className="p-2.5 border-2 border-black">Judul</th>
            <th className="p-2.5 border-2 border-black">Deskripsi</th>
          </tr>
        </thead>
        <tbody className="border-2 border-black">
          {postsList.map((post) => (
            <tr className="odd:bg-white even:border-slate-50" key={post.id}>
              <td className="p-2.5 border-2 border-black">{post.id}</td>
              <td className="p-2.5 border-2 border-black">{post.title}</td>
              <td className="p-2.5 border-2 border-black">{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Dashboard;
