import React from 'react';
import kitchen from '../../images/kitchen.jpg'

const News = () => {
    return (
        <div className='font-raleway'>
            <h2 className="font-bold normal-case text-4xl font-josefin text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center pb-8">News and Articles</h2>
            <div className="card card-compact lg:w-1/2 bg-base-100 shadow-xl mx-auto lg:flex">
                <div>
                    <figure><img src={kitchen} alt="" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="text-xl font-bold text-center">How to Paint Your Kitchen Cabinets</h2>
                    <p>Choose the right paint and primer to give your kitchen cabinets a high-quality finish—without breaking your budget. This Old House painting expert Mauro Henrique shows host Kevin Connor the proper way to paint cabinets for a new, updated look.
                        If you have noticed the cost of new appliances, countertops, and cabinets, its no surprise that renovating a kitchen is one of the most expensive remodeling projects. While few homeowners find ways to boost the look of a dated refrigerator or tired granite, transforming a kitchen by freshening the cabinets that make up most of the rooms visual space is entirely within reach. But theres more to the job than buying a gallon of your favorite color.

                        Read our step-by-step instructions and watch expert painter Mauro Henrique demonstrate how to get the job done right.

                        How Much Does it Cost to Paint Kitchen Cabinets?
                        Renovating a kitchen is one of the most expensive remodeling projects that you can take on, and replacing the cabinets can account for nearly 40 percent of that cost.

                        Cabinets for a 10-by 12-foot kitchen can easily top $5,000—and your new cabinets may actually be of lower quality than the ones you're replacing. On the other hand, a few fresh coats of paint can go a long way toward transforming your existing cabinets for a fraction of that price. In fact, the cost of painting should be no more than about $200, plus a weekend or two of your time.</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-ghost border-0 font-sans text-white w-full bg-gradient-to-r from-purple-400 to-pink-600">Join our mailing list to read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;