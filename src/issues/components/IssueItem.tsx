import { getIssueByNumber, getIssueComments } from "@Issues/hooks";
import { Issue, State } from "@Issues/interfaces";
import { useQueryClient } from "@tanstack/react-query";
import { FC } from "react";
import { FiCheckCircle, FiInfo, FiMessageSquare } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface Props {
  issue: Issue;
}

export const IssueItem: FC<Props> = ({ issue }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const onMouseEnter = () => {
    queryClient.prefetchQuery(["issue", issue.number], () =>
      getIssueByNumber(issue.number)
    );

    queryClient.prefetchQuery(["issue", issue.number, "comments"], () =>
      getIssueComments(issue.number)
    );
  };

  return (
    <div
      className="card mb-2 issue"
      onClick={() => navigate(`/issues/issue/${issue.number}`)}
      onMouseEnter={onMouseEnter}
    >
      <div className="card-body card-custom-body">
        {issue.state === State.Open ? (
          <div className="card-issue-icon">
            <FiInfo size={30} color="red" />
          </div>
        ) : (
          <div className="card-issue-icon">
            <FiCheckCircle size={30} color="green" />
          </div>
        )}

        <div className="d-flex flex-column flex-fill px-2">
          <span>{issue.title}</span>
          <span className="issue-subinfo">
            {`#${issue.number} ${issue.state} 2 days ago by `}
            <span className="fw-bold">{issue.user.login}</span>
          </span>
        </div>

        <div className="d-flex align-items-center">
          <img
            src={issue.user.avatar_url}
            alt="User Avatar"
            className="avatar"
          />
          <span className="px-2"> {issue.comments} </span>
          <FiMessageSquare />
        </div>
      </div>
    </div>
  );
};
