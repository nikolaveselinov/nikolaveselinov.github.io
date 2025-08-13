# abtown-visualization-app

This project is an interactive web application designed to visualize the `abtown_dataset_computed.csv` dataset. Users can select parameters \( k \) and \( (a, b) \) to customize the visualization and download the dataset file.

## Project Structure

```
abtown-visualization-app
├── src
│   ├── components
│   │   ├── DatasetVisualizer.tsx      # Component for rendering dataset visualization
│   │   └── ParameterSelector.tsx       # Component for selecting parameters
│   ├── pages
│   │   └── index.tsx                   # Main entry point of the application
│   ├── utils
│   │   └── dataLoader.ts                # Utility for loading the dataset
│   └── types
│       └── index.ts                     # Type definitions for the project
├── public
│   └── static
│       └── uploads
│           └── abtown_dataset_computed.csv # Dataset file for visualization
├── package.json                         # npm configuration file
├── tsconfig.json                        # TypeScript configuration file
└── README.md                            # Project documentation
```

## Features

- **Interactive Visualization**: Users can visualize the dataset based on selected parameters.
- **Parameter Selection**: UI elements allow users to adjust parameters \( k \) and \( (a, b) \).
- **Data Download**: Users can download the dataset directly from the application.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   cd abtown-visualization-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.