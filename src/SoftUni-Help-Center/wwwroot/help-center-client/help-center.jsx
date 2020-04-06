window.onload = async function () {

    // Load the React framework
    if (typeof React === 'undefined') {
        await $.getScript('/lib/react/umd/react.development.js');
    }
    if (typeof ReactDOM === 'undefined') {
        await $.getScript('/lib/react-dom/umd/react-dom.development.js');
    }

    // Load the help center CSS styles
    if ($('#help-center-css').length == 0) {
        let cssUrl = '/help-center-client/help-center.css?_=' + new Date().getTime();;
        $("head").append(`<link rel='stylesheet' id='help-center-css'
            href='${cssUrl}' type='text/css' />`);
    }

    const CategoriesEnum = {
        TECH: 'tech',
        ADMIN: 'admin',
        COMMUNITY: 'community'
    };

    const TechCategoriesEnum = {
        MY: 'my',
        SECTION: 'section',
        LESSON: 'lesson',
        COURSE: 'course'
    };

    let state = {
        activeCategory: CategoriesEnum.ADMIN,
        activeTechCategory: TechCategoriesEnum.SECTION
    };

    class HelpCenter extends React.Component {
        render() {
            return (
                <div id="help-center">
                    <CategoriesPanel />
                    <ContentPanel />
                </div>
            );
        }
    }

    class CategoriesPanel extends React.Component {
        render() {
            return (
                <nav className="categories-panel">
                    <CategoriesHeader />
                    <TechnicalCategoryPanel active={state.activeCategory == CategoriesEnum.TECH} />
                    <AdministrativeCategoryPanel active={state.activeCategory == CategoriesEnum.ADMIN} />
                    <CommunityCategoryPanel active={state.activeCategory == CategoriesEnum.COMMUNITY} />
                </nav>
            );
        }
    }

    class ContentPanel extends React.Component {
        render() {
            return (
                <section className="content-panel">
                    <ContentHeader />
                    <ContentBodyPanel />
                </section>
            );
        }
    }

    class ContentHeader extends React.Component {
        render() {
            let title = "Content Header";
            if (state.activeCategory == CategoriesEnum.TECH)
                title = "Technical Questions";
            else if (state.activeCategory == CategoriesEnum.ADMIN)
                title = "Administrative Questions";
            if (state.activeCategory == CategoriesEnum.COMMUNITY)
                title = "Community Discussions";

            return (
                <header className="content-header">
                    <h1>{title}</h1>
                </header>
            );
        }
    }

    class CategoriesHeader extends React.Component {
        render() {
            return (
                <header className="categories-header">
                    <h1>Help Center</h1>
                </header>
            );
        }
    }

    class TechnicalCategoryPanel extends React.Component {
        render() {
            let className = 'technical-category-panel';
            if (this.props.active) {
                className += ' active';
            }
            let cssClassMy = state.activeTechCategory == TechCategoriesEnum.MY ? "active" : "";
            let cssClassSection = state.activeTechCategory == TechCategoriesEnum.SECTION ? "active" : "";
            let cssClassLesson = state.activeTechCategory == TechCategoriesEnum.LESSON ? "active" : "";
            let cssClassCourse = state.activeTechCategory == TechCategoriesEnum.COURSE ? "active" : "";
            return (
                <section className={className}>
                    <h2>Technical</h2>
                    <ul>
                        <li class={cssClassMy}>My</li>
                        <li class={cssClassSection}>Section</li>
                        <li class={cssClassLesson}>Lesson</li>
                        <li class={cssClassCourse}>Course</li>
                    </ul>
                </section>
            );
        }
    }

    class AdministrativeCategoryPanel extends React.Component {
        render() {
            let className = 'administrative-category-panel';
            if (this.props.active) {
                className += ' active';
            }
            return (
                <section className={className} onClick={this.adminPanelClick}>
                    <h2>Administrative</h2>
                </section>
            );
        }

        adminPanelClick(event) {
            alert('admin click')
        }
    }

    class CommunityCategoryPanel extends React.Component {
        render() {
            let className = 'community-category-panel';
            if (this.props.active) {
                className += ' active';
            }
            return (
                <section className={className} >
                    <h2>Community</h2>
                </section>
            );
        }
    }

    class ContentBodyPanel extends React.Component {
        render() {
            return (
                <div className="content-body-panel">
                    <QuestionsPanel />
                    <QuestionDetailsPanel />
                </div>
            );
        }
    }

    class QuestionsPanel extends React.Component {
        render() {
            return (
                <section className="questions-panel">
                    <h2>Questions</h2>
                </section>
            );
        }
    }

    class QuestionDetailsPanel extends React.Component {
        render() {
            return (
                <section className="question-details-panel">
                    <h2>Question Details</h2>
                </section>
            );
        }
    }

    class AdministrativeQuestionPanel extends React.Component {
        render() {
            return (
                <section className="administrative-question-panel">
                    <h2>Ask Administrative Question</h2>
                </section>
            );
        }
    }

    class AdministrativeFAQPanel extends React.Component {
        render() {
            return (
                <section className="faq-panel">
                    <h2>FAQ</h2>
                </section>
            );
        }
    }

    ReactDOM.render(<HelpCenter />, document.getElementById('help-center-container'));
}