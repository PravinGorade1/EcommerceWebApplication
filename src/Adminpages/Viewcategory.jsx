import React, { useEffect, useState } from 'react';
import { viewCategoryAPI } from '../API/Auth';
import cloth from  '../assets/cloth.png'
import ele from '../assets/ele.jpeg'
 import mobile from '../assets/mobile.png'
const categoryImages = {
    Electronics:ele,
    Laptop: '/images/laptop.png',
    MobilePhone:mobile,
    Cloth: cloth,
    Fashion: '/images/fashion.png',
    Book: '/images/book.png',
};

const ViewCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await viewCategoryAPI();
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
        alert('Failed to fetch categories');
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="container mt-5 text-center">
      <h3 className="mb-4">Category</h3>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {categories.map((cat) => (
          <div key={cat.categoryId} className="text-center">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center shadow"
              style={{
                width: '120px',
                height: '120px',
                backgroundColor: '#f0f0f0',
                margin: 'auto',
              }}
            >
              <img
                src={categoryImages[cat.categoryname] || '/images/default.png'}
                alt={cat.categoryname}
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              />
            </div>
            <div className="mt-2 fw-bold">{cat.categoryname}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewCategory;
