import React from 'react';
import data from './Resoursedata';
const Resources = () => {

	return (
		<div className="row">
			{data.columns && data.columns.map((column, index) => (
				<div key={index} className='col-md-3 p-4'>
					<h3>{column.title}</h3>
					{column.list && column.list.length > 0 && (
						<ul className="arrow-list">
							{column.list.map((item, i) => (
								<li key={i}>{item}</li>
							))}
						</ul>
					)}
				</div>
			))}

			<div className="row">
				{data.features && data.features.map((feature, index) => (
					<div className="col-md-3" key={index}>
						<div className="boxed-feature">
							<i className={feature.icon}></i>
							<div className="feature-desc">
								<h2 className="feature-title">{feature.title}</h2>
								<p>{feature.description}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Resources;
